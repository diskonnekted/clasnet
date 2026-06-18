const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('public/uploads/clasnet group.html', 'utf8');
const $ = cheerio.load(html, { xmlMode: false });

// Remove unwanted elements
$('#spinner').remove();
$('.bg-dark.d-none.d-lg-block').remove();
$('.navbar').remove();
$('#header-carousel').parent().remove(); 
$('#header-carousel').remove(); 
$('.bg-dark.text-light.mt-5').remove();
$('.container-fluid.text-white').remove(); 
$('.back-to-top').remove();

// Try to remove footer explicitly
$('div:contains("Hak Cipta")').closest('.container-fluid').remove();

// We will keep everything else in the body.
const classMap = {
    'container-fluid': 'w-full',
    'container': 'container mx-auto px-4',
    'row': 'flex flex-wrap -mx-4',
    'col-lg-4': 'w-full lg:w-1/3 px-4',
    'col-lg-5': 'w-full lg:w-5/12 px-4',
    'col-lg-7': 'w-full lg:w-7/12 px-4',
    'col-md-6': 'w-full md:w-1/2 px-4',
    'col-sm-6': 'w-full sm:w-1/2 px-4',
    'col-12': 'w-full px-4',
    'd-flex': 'flex',
    'd-inline-flex': 'inline-flex',
    'align-items-center': 'items-center',
    'justify-content-center': 'justify-center',
    'justify-content-between': 'justify-between',
    'flex-column': 'flex-col',
    'text-center': 'text-center',
    'text-primary': 'text-primary',
    'text-white': 'text-white',
    'bg-primary': 'bg-primary',
    'bg-light': 'bg-gray-100',
    'bg-white': 'bg-white',
    'bg-transparent': 'bg-transparent',
    'shadow': 'shadow-md',
    'shadow-sm': 'shadow-sm',
    'rounded': 'rounded-lg',
    'rounded-circle': 'rounded-full',
    'py-5': 'py-12',
    'pt-5': 'pt-12',
    'pb-5': 'pb-12',
    'pt-lg-0': 'lg:pt-0',
    'pb-3': 'pb-3',
    'mb-0': 'mb-0',
    'mb-1': 'mb-1',
    'mb-2': 'mb-2',
    'mb-3': 'mb-4',
    'mb-4': 'mb-6',
    'mb-5': 'mb-8',
    'mt-2': 'mt-2',
    'mt-3': 'mt-4',
    'mt-4': 'mt-6',
    'mt-5': 'mt-8',
    'p-0': 'p-0',
    'p-3': 'p-4',
    'p-4': 'p-6',
    'p-5': 'p-8',
    'ps-4': 'pl-6',
    'pe-3': 'pr-4',
    'gx-0': 'gap-x-0',
    'gx-3': 'gap-x-4',
    'g-0': 'gap-0',
    'g-5': 'gap-8',
    'position-relative': 'relative',
    'position-absolute': 'absolute',
    'top-0': 'top-0',
    'start-0': 'left-0',
    'translate-middle': '-translate-x-1/2 -translate-y-1/2',
    'w-100': 'w-full',
    'h-100': 'h-full',
    'vh-100': 'h-screen',
    'fw-bold': 'font-bold',
    'fw-normal': 'font-normal',
    'text-uppercase': 'uppercase',
    'btn': 'inline-block text-center cursor-pointer transition-colors duration-200',
    'btn-primary': 'bg-primary text-white hover:bg-primary/90',
    'btn-outline-light': 'border border-white text-white hover:bg-white hover:text-primary',
    'btn-sm': 'text-sm py-1 px-2',
    'btn-lg': 'text-lg py-3 px-6',
    'py-2': 'py-2',
    'py-3': 'py-3',
    'px-4': 'px-6',
    'px-5': 'px-8',
    'me-2': 'mr-2',
    'me-3': 'mr-4',
    'ms-3': 'ml-4',
    'ms-auto': 'ml-auto',
    'mx-auto': 'mx-auto',
    'wow': 'animate-fade-in opacity-100', // ensure it's visible without JS
    'fadeInUp': '',
    'zoomIn': '',
    'slideInUp': '',
    'slideInDown': '',
    'slideInLeft': '',
    'slideInRight': '',
    'fadeIn': '',
    'm-0': 'm-0',
    'display-1': 'text-5xl font-bold',
    'display-5': 'text-3xl font-bold',
    'border-0': 'border-0',
    'border-bottom': 'border-b border-gray-200',
    'border-primary': 'border border-primary',
    'align-top': 'align-top',
    'align-bottom': 'align-bottom',
};

function mapClasses(classStr) {
    if (!classStr) return '';
    const classes = classStr.split(' ');
    const newClasses = classes.map(c => classMap[c] !== undefined ? classMap[c] : c);
    return newClasses.filter(Boolean).join(' ');
}

function processNode(node) {
    if (node.type === 'tag') {
        if (node.attribs.class) {
            node.attribs.class = mapClasses(node.attribs.class);
        }
        // Remove style to prevent React errors (inline styles need objects)
        if (node.attribs.style) {
            delete node.attribs.style;
        }
        // Fix data-wow-delay and similar if they cause hydration issues
        
        if (node.children) {
            node.children.forEach(processNode);
        }
    }
}

$('body').children().each((i, el) => processNode(el));

let jsxStr = $('body').html();

// Basic HTML to JSX fixes
jsxStr = jsxStr.replace(/class=/g, 'className=');
jsxStr = jsxStr.replace(/for=/g, 'htmlFor=');

// Fix self closing tags safely
jsxStr = jsxStr.replace(/<img([^>]*?)(?:\/?)>/g, '<img$1 />');
jsxStr = jsxStr.replace(/<input([^>]*?)(?:\/?)>/g, '<input$1 />');
jsxStr = jsxStr.replace(/<br([^>]*?)(?:\/?)>/g, '<br />');
jsxStr = jsxStr.replace(/<hr([^>]*?)(?:\/?)>/g, '<hr />');

// Remove comments
jsxStr = jsxStr.replace(/<!--[\s\S]*?-->/g, '');

const componentCode = `
import React from 'react';
import Link from 'next/link';

export function LegacyContent() {
    return (
        <div className="legacy-content-wrapper bg-background text-foreground">
            ${jsxStr}
        </div>
    );
}
`;

fs.writeFileSync('components/ui/custom/LegacyContent.tsx', componentCode);
console.log('Successfully created LegacyContent.tsx');
