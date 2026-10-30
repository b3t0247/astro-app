/**
 * Centralized site configuration.
 * Update site metadata, social links, and navigation items here
 * to keep content consistent across the portfolio.
 */
export const SITE = {
    name: 'John Doe',
    position: 'IT Support Engineer • Software Engineer (AI/ML)',
    social: [
        { platform: 'Github', href: 'https://github.com/john_doe', username: 'john_doe' },
        { platform: 'X', href: 'https://x.com/john_doe', username: 'john_doe' },
        { platform: 'Linkedin', href: 'https://linkedin.com/in/john_doe', username: 'john_doe' }
    ]
} as const;

export const NAV_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
] as const;