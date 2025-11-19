# VirtualAssistandWriters.Co

A modern, professional website for VirtualAssistandWriters.Co built with Next.js, Tailwind CSS, shadcn/ui, Turborepo, and Drizzle ORM.

## Tech Stack

- ✅ **Next.js 14** - React framework with App Router
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **shadcn/ui** - High-quality component library
- ✅ **Turborepo** - High-performance build system
- ✅ **Drizzle ORM** - TypeScript ORM for SQL databases
- ✅ **TypeScript** - Type-safe development

## Features

- Responsive design with brand colors (dark green, light grey, yellow)
- 12 comprehensive virtual assistant services
- Interactive service cards and accordion
- Contact information section
- Modern UI with smooth animations
- SEO-optimized metadata

## Getting Started

First, install dependencies:

```bash
npm install
# or
bun install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
bun dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities and database
│   ├── db/              # Drizzle ORM schema and config
│   └── utils.ts         # Helper functions
├── public/              # Static assets
└── package.json         # Dependencies
```

## Environment Variables

Create a `.env.local` file for database configuration:

```env
DATABASE_URL=your_postgresql_connection_string
```

## Build

To create a production build:

```bash
npm run build
# or
bun build
# or
pnpm build
```

## License

Private project for VirtualAssistandWriters.Co
