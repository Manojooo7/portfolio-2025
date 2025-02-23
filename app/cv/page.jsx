'use client'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator} from '@/components/ui/separator'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { Mail, Phone } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      <Card className="mx-auto max-w-4xl">
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">MANOJ MONDAL</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+919834594067" className="flex items-center gap-1 hover:text-primary">
                <Phone className="h-4 w-4" />
                +919834594067
              </a>
              <a href="mailto:manoj.mondaal@gmail.com" className="flex items-center gap-1 hover:text-primary">
                <Mail className="h-4 w-4" />
                manoj.mondaal@gmail.com
              </a>
              <a href="https://linkedin.com/in/manojoo7" className="flex items-center gap-1 hover:text-primary">
                <IconBrandLinkedin className="h-4 w-4" />
                linkedin.com/in/manojoo7
              </a>
              <a href="https://github.com/Manojoo7" className="flex items-center gap-1 hover:text-primary">
                <IconBrandGithub className="h-4 w-4" />
                github.com/Manojoo7
              </a>
            </div>
            <p className="text-lg font-medium">FULL STACK DEVELOPER | SPECIALIZE IN BUILDING PRODUCTS</p>
      <ShinyButton onClick={() => window.open('/resume.pdf', '_blank')}>Download Resume</ShinyButton>
          </div>

          <Separator className='bg-white' />

          {/* Technical Skills */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Technical Skills</h2>
            <div className="grid gap-3">
              <div className="space-y-1">
                <span className="font-semibold">Front-End Development:</span>
                <span className="ml-2">HTML, CSS, JavaScript, React, Next, UI libraries</span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold">Back-End Development:</span>
                <span className="ml-2">Node.js, Express</span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold">E-commerce Development:</span>
                <span className="ml-2">WordPress, Shopify</span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold">Database Management:</span>
                <span className="ml-2">MongoDB, phpMyAdmin, NeoDB, PostgreSQL</span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold">Other Libraries and Tools:</span>
                <span className="ml-2">Zapier, Clerk, Prisma, Appwrite</span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold">Cloud Technologies:</span>
                <span className="ml-2">AWS Services: EC2, S3, CloudFront, RDS</span>
              </div>
            </div>
          </div>

          <Separator className='bg-white' />

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Experience/Projects</h2>
            <div className="space-y-6">
              {/* First Job */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold">SHRISHTI TOURS AND TRAVELS PRIVATE LIMITED</h3>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">April 2024 – Present</p>
                    <p className="text-sm text-muted-foreground">MUMBAI, India</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Developed dynamic, responsive web applications using React, Next, Prisma, Clerk, Node.js, MongoDB,
                    and JavaScript, enhancing user experience and engagement.
                  </li>
                  <li>Implemented automated workflows, reducing manual effort and improving efficiency.</li>
                  <li>
                    Built an event management system with registration, automated email notifications, and Google
                    AppSheet integration for real-time attendance tracking.
                  </li>
                  <li>Created a centralized itinerary management platform, streamlining supplier communications.</li>
                  <li>
                    Currently developing a unified booking system integrating hotel, flight, and insurance APIs to
                    reduce dependency on multiple platforms.
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Technologies:</span> React, Node.js, MongoDB, JavaScript, WordPress,
                  Google AppSheet, API Integration (Hotels, Flights, Insurance)
                </p>
              </div>

              {/* Second Job */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold">JSAEcom – 3D Printing Company</h3>
                    <p className="text-sm text-muted-foreground">Website Developer, Automation</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">April 2022 – 2024</p>
                    <p className="text-sm text-muted-foreground">MUMBAI, India</p>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Developed a WordPress-based eCommerce platform for selling 3D-printed cookie cutters across Amazon,
                    Flipkart, and the company's website.
                  </li>
                  <li>
                    Automated order and manufacturing processes by integrating Amazon, Flipkart, and OctoPrint APIs with
                    a MySQL database.
                  </li>
                  <li>
                    Enabled real-time order processing, allowing 3D printers to automatically start printing based on
                    incoming orders.
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Technologies:</span> WordPress, Amazon and Flipkart APIs, OctoPrint API,
                  MySQL, eCommerce Automation
                </p>
              </div>
            </div>
          </div>

          <Separator className='bg-white' />

          {/* Personal Projects */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Personal Projects</h2>
            <div className="space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-bold">Itinerary Wizard – Automated Itinerary Management</h3>
                <span className="text-sm bg-muted px-2 py-1 rounded-md">Currently Working</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Built an AI-powered tool to extract, structure, and store travel itineraries from emails.</li>
                <li>Generates a dynamic webpage and a shareable URL for instant itinerary access.</li>
                <li>Integrates email & WhatsApp broadcasting with double-tick confirmation.</li>
                <li>Supports custom domains and webhooks for seamless website integration.</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Tech:</span> Gemini AI, AI Email Parsing, Database, Webhooks, WhatsApp &
                Email API, Dynamic Web Pages
              </p>
            </div>
          </div>

          <Separator className='bg-white' />

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Education</h2>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-bold">Mumbai University</h3>
                <p className="text-sm text-muted-foreground">M.com</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Aug 2021 – Sep 2023</p>
                <p className="text-sm text-muted-foreground">Mumbai</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

  )
}

export default page