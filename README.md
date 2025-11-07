# Personal Website Template

A clean, minimal personal website template built with Next.js, React, and Tailwind CSS.

## Features

- 📱 Responsive design
- 🎨 Clean and minimal UI
- 📝 Blog integration with Markdown support
- 🎯 Custom cursor animation
- ⚡ Fast and optimized

## Tech Stack

- **Framework**: Next.js 15
- **UI**: React 19 with Tailwind CSS
- **Styling**: CSS Modules
- **Content**: Markdown with gray-matter
- **Rendering**: React Markdown with remark-gfm

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── blog/
│   ├── blogData.tsx        # Blog data loader
│   └── blogposts/          # Markdown blog posts
├── components/
│   ├── ClientOnly.tsx      # Client-side rendering wrapper
│   ├── HomeContent.tsx     # Main content component
│   ├── SocialIcons.tsx     # Social media icons
│   └── StickyDotCursor.*   # Custom cursor animation
├── globals.css             # Global styles
├── layout.tsx              # Root layout
└── page.tsx                # Home page

public/
├── bunkatopic.png          # Blog post image
├── portrait.png            # Profile image
└── icon.png                # Favicon
```

## Customization

### Personal Information

1. **Update `app/layout.tsx`:**
   - Change `"Your Name - Personal Website"` to your actual name
   - Update the `description` in the metadata

2. **Update `app/components/HomeContent.tsx`:**
   - Replace `"Your Name"` with your actual name
   - Replace the lorem ipsum text with your real bio
   - Update any links to your actual websites/companies

3. **Update `app/components/SocialIcons.tsx`:**
   - Replace `"yourusername"` with your actual social media handles
   - GitHub: `https://github.com/yourusername`
   - LinkedIn: `https://linkedin.com/in/yourusername`
   - Twitter: `https://twitter.com/yourusername`

4. **Add your images:**
   - Replace `public/portrait.png` with your profile picture
   - Replace `app/icon.png` with your favicon

### Blog Posts

Add new blog posts to `app/blog/blogposts/` as Markdown files with the following frontmatter:

```markdown
---
id: "1"
hashtag: "#example"
title: "Your Post Title"
date: "January 1, 2024"
---

Your content here...
```

The template includes two example posts to demonstrate the format and styling.

### Colors

Modify the color scheme in:
- `app/globals.css` - CSS variables and theme colors
- Tailwind classes throughout components

## Building for Production

```bash
npm run build
npm start
```

## License

Feel free to use this template for your personal website!
