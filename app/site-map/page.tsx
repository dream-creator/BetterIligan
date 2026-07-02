import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';
import SubpageNav from '@/components/ui/SubpageNav';
import SubpageHero from '@/components/ui/SubpageHero';

export const metadata: Metadata = {
    title: 'Sitemap',
    description: 'Complete sitemap of BetterIliganCity.org — find all pages, services, and resources for Iligan City.',
};

interface SitemapLink {
    label: string;
    href: string;
    external?: boolean;
}

interface SitemapSection {
    title: string;
    links: SitemapLink[];
}

const sections: SitemapSection[] = [
    {
        title: 'Main',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/about' },
            { label: 'Volunteer', href: '/volunteer' },
        ],
    },
    {
        title: 'Iligan City',
        links: [
            { label: 'All About Iligan', href: '/iligan' },
            { label: 'City Profile & Stats', href: '/iligan/city-stats' },
            { label: 'City Officials', href: '/iligan/city-officials' },
            { label: 'Barangays', href: '/iligan/barangays' },
            { label: 'Electricity', href: '/iligan/electricity' },
        ],
    },
    {
        title: 'Services',
        links: [
            { label: 'All Services', href: '/services' },
            { label: 'Business and Trade', href: '/services?category=Business%2C+Trade+and+Investment' },
            { label: 'Certificates and Vital Records', href: '/services?category=Certificates+and+Vital+Records' },
            { label: 'Health and Wellness', href: '/services?category=Health+and+Wellness' },
            { label: 'Animal Welfare', href: '/services?category=Animal+Welfare' },
            { label: 'Disaster Preparedness', href: '/services?category=Disaster+Preparedness' },
            { label: 'Infrastructure and Public Works', href: '/services?category=Infrastructure+and+Public+Works' },
            { label: 'Transport and Driving', href: '/services?category=Transport+and+Driving' },
        ],
    },
    {
        title: 'Government',
        links: [
            { label: 'Government Overview', href: '/government' },
            { label: 'National Agencies', href: '/government/directory' },
            { label: 'Departments', href: '/government/departments' },
        ],
    },
    {
        title: 'Transparency',
        links: [
            { label: 'Transparency Overview', href: '/transparency' },
            { label: 'Budget & Finances', href: '/transparency/budget' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Open Data', href: '/open-data' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms-of-service' },
            { label: 'iligan.gov.ph', href: 'https://iligan.gov.ph/', external: true },
        ],
    },
];

export default function SitemapPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-24">

            <SubpageNav href='/' text='Go Home' />
            <SubpageHero>
                <SubpageHero.Badges>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </SubpageHero.Badges>
                <SubpageHero.Title>Sitemap</SubpageHero.Title>
                <SubpageHero.Description>
                    Find every page on BetterIliganCity.org, organized by section.
                </SubpageHero.Description>
            </SubpageHero>

            <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                <h2 className="text-lg font-bold text-slate-900">
                                    {section.title}
                                </h2>
                            </div>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                            >
                                                {link.label} ↗
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
