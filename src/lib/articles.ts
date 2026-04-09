export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  featuredImage: string;
  readingTime: number;
  featured: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  count: number;
  icon: string;
}

export const categories: Category[] = [
  {
    name: "Technology",
    slug: "technology",
    description: "Latest trends, tools, and innovations in the tech world.",
    count: 2,
    icon: "💻",
  },
  {
    name: "Web Development",
    slug: "web-development",
    description: "Guides, tutorials, and best practices for modern web development.",
    count: 2,
    icon: "🌐",
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "Tips and strategies to boost your workflow and efficiency.",
    count: 1,
    icon: "⚡",
  },
  {
    name: "Online Business",
    slug: "online-business",
    description: "Strategies for building and growing your online business.",
    count: 1,
    icon: "📈",
  },
];

const author = {
  name: "Jad Lamtaifi",
  avatar: "/images/author-avatar.jpg",
  bio: "Full-stack developer, writer, and technology enthusiast sharing practical advice on web development, productivity, and digital tools.",
};

export const articles: Article[] = [
  {
    slug: "nextjs-app-router-complete-guide-2026",
    title: "Next.js App Router: The Complete Guide for 2026",
    excerpt:
      "Learn how to build blazing-fast web applications with Next.js App Router. This guide covers server components, layouts, data fetching, and deployment strategies.",
    content: `
The Next.js App Router has fundamentally changed how we build React applications. Since its stabilization, it has become the recommended way to build new Next.js projects and offers a more intuitive, powerful approach to routing and rendering.

## Why the App Router Matters

The App Router introduces several paradigm shifts that every web developer should understand. At its core, it leverages React Server Components (RSC), a technology that allows components to render exclusively on the server. This means smaller JavaScript bundles, faster page loads, and a better user experience overall.

### Server Components vs. Client Components

By default, every component in the \`app\` directory is a **Server Component**. Server Components run only on the server and never ship JavaScript to the browser. This is ideal for components that:

- Fetch data from a database or API
- Access backend resources directly
- Keep sensitive information like API keys on the server
- Render static or infrequently changing content

To make a component interactive—handling clicks, managing state, or using browser APIs—you add the \`"use client"\` directive at the top of the file.

\`\`\`tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
\`\`\`

## Layouts and Nested Routing

One of the most powerful features of the App Router is the layout system. Layouts wrap pages and persist across navigations, meaning shared UI like headers and sidebars don't re-render when users navigate between pages.

### How Layouts Work

Create a \`layout.tsx\` file in any route segment to define a layout:

\`\`\`
app/
├── layout.tsx          // Root layout (required)
├── page.tsx            // Home page
├── blog/
│   ├── layout.tsx      // Blog layout
│   ├── page.tsx        // Blog listing page
│   └── [slug]/
│       └── page.tsx    // Individual blog post
\`\`\`

Each layout receives a \`children\` prop that represents the content of the page or nested layout below it.

## Data Fetching Patterns

The App Router simplifies data fetching by allowing you to fetch data directly inside Server Components using \`async/await\`:

\`\`\`tsx
export default async function BlogPage() {
  const posts = await fetch("https://api.example.com/posts").then(res => res.json());
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

### Caching and Revalidation

Next.js extends \`fetch\` with caching and revalidation options. You can control how data is cached using the \`next\` option:

- **Static**: Data is cached at build time (default behavior)
- **Revalidate**: Data is refreshed at a specified interval
- **Dynamic**: Data is fetched on every request

## Metadata and SEO

The App Router provides a built-in \`Metadata\` API for managing page titles, descriptions, and Open Graph tags:

\`\`\`tsx
export const metadata = {
  title: "My Blog Post",
  description: "A detailed guide on building web apps.",
  openGraph: {
    title: "My Blog Post",
    description: "A detailed guide on building web apps.",
    images: ["/og-image.jpg"],
  },
};
\`\`\`

## Deployment Tips

When deploying your Next.js App Router application:

1. **Use Vercel** for the smoothest experience, as it's built by the same team
2. **Optimize images** using the built-in \`next/image\` component
3. **Enable ISR** (Incremental Static Regeneration) for pages that change occasionally
4. **Monitor Core Web Vitals** using the built-in analytics

## Conclusion

The Next.js App Router represents a significant step forward for React applications. By embracing Server Components, the layout system, and built-in data fetching, you can build faster, more maintainable applications with less code.

Start a new project today and experience the difference. The ecosystem, tooling, and community support make it an excellent choice for projects of every scale.
    `.trim(),
    category: "Web Development",
    tags: ["Next.js", "React", "App Router", "Server Components", "Web Development"],
    author,
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-05",
    featuredImage: "/images/nextjs-guide.jpg",
    readingTime: 8,
    featured: true,
  },
  {
    slug: "best-ai-tools-for-developers-2026",
    title: "10 Best AI Tools Every Developer Should Use in 2026",
    excerpt:
      "Discover the most powerful AI-powered developer tools that can dramatically boost your coding productivity, from code assistants to debugging helpers.",
    content: `
Artificial Intelligence is transforming software development at an unprecedented pace. In 2026, AI tools aren't just novelties—they are essential companions that help developers write better code, debug faster, and ship more reliable software.

## 1. AI Code Assistants

Modern AI code assistants have matured significantly. They now understand project context, follow coding conventions, and can generate entire features:

- **Context-aware completions** that understand your entire codebase
- **Multi-file refactoring** suggestions
- **Test generation** from existing code
- **Documentation writing** that stays in sync with your code

## 2. Automated Code Review

AI-powered code review tools can catch bugs, security vulnerabilities, and performance issues before they reach production:

### What They Catch

- Memory leaks and resource management issues
- SQL injection and XSS vulnerabilities
- Race conditions in concurrent code
- Accessibility violations in frontend code

## 3. Smart Debugging Tools

Gone are the days of \`console.log\` debugging. AI debugging tools can:

- Analyze stack traces and suggest fixes
- Reproduce bugs from error reports
- Identify the root cause of intermittent failures
- Suggest performance optimizations based on profiling data

## 4. Natural Language to Code

Describe what you want in plain English, and AI converts it to working code. These tools excel at:

- Generating boilerplate code
- Creating database queries from natural language
- Building API endpoints from specifications
- Converting design mockups to frontend code

## 5. Intelligent Testing

AI testing tools can generate comprehensive test suites:

\`\`\`typescript
// AI-generated test example
describe("UserService", () => {
  it("should create a user with valid data", async () => {
    const user = await createUser({
      name: "John Doe",
      email: "john@example.com",
    });
    expect(user.id).toBeDefined();
    expect(user.name).toBe("John Doe");
  });

  it("should reject invalid email formats", async () => {
    await expect(
      createUser({ name: "John", email: "invalid" })
    ).rejects.toThrow("Invalid email");
  });
});
\`\`\`

## 6. Documentation Generation

AI documentation tools can automatically generate and maintain:

- API documentation from code comments
- Architecture diagrams from code structure
- README files with usage examples
- Change logs from commit history

## 7. Performance Optimization

AI tools can analyze your application and suggest:

- Bundle size optimizations
- Database query improvements
- Caching strategies
- CDN configuration recommendations

## 8. Security Scanning

AI-powered security tools offer:

- Real-time vulnerability detection
- Dependency audit and update recommendations
- Secret detection in code and configuration
- Compliance checking against security standards

## 9. DevOps Automation

AI is streamlining DevOps workflows:

- Automatic CI/CD pipeline optimization
- Intelligent resource scaling
- Anomaly detection in production logs
- Incident response automation

## 10. Learning and Skill Development

AI-powered learning platforms help developers:

- Get personalized learning paths
- Practice with AI-generated coding challenges
- Receive instant feedback on code quality
- Stay updated with latest best practices

## How to Choose the Right Tools

When evaluating AI developer tools, consider:

1. **Integration with your workflow**: The best tool is one you'll actually use
2. **Privacy and security**: Understand what data is sent to external servers
3. **Accuracy**: Test tools with your specific use cases before committing
4. **Cost**: Many offer generous free tiers for individual developers

## Conclusion

AI tools are no longer optional for competitive developers. They save hours of repetitive work, catch errors humans miss, and help you focus on the creative aspects of software development. Start integrating these tools into your workflow today.
    `.trim(),
    category: "Technology",
    tags: ["AI", "Developer Tools", "Productivity", "Automation", "Programming"],
    author,
    publishedAt: "2026-03-28",
    updatedAt: "2026-04-02",
    featuredImage: "/images/ai-tools.jpg",
    readingTime: 10,
    featured: true,
  },
  {
    slug: "mastering-css-grid-flexbox-modern-layouts",
    title: "Mastering CSS Grid & Flexbox for Modern Layouts",
    excerpt:
      "A practical guide to CSS Grid and Flexbox with real-world examples. Learn when to use each and how to combine them for powerful responsive layouts.",
    content: `
CSS Grid and Flexbox are the two most important layout tools in modern web development. While they share some capabilities, each excels in different scenarios. Understanding when and how to use them—and how to combine them—is essential for building professional, responsive websites.

## Flexbox: One-Dimensional Layouts

Flexbox is designed for laying out items along a single axis—either horizontally or vertically. It excels at distributing space and aligning items within a container.

### Common Flexbox Use Cases

- Navigation bars
- Card rows
- Centering content
- Footer layouts
- Form controls

### Flexbox Basics

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

### Key Flexbox Properties

- \`flex-direction\`: Sets the main axis (row or column)
- \`justify-content\`: Distributes space along the main axis
- \`align-items\`: Aligns items along the cross axis
- \`flex-wrap\`: Controls whether items wrap to new lines
- \`gap\`: Sets spacing between flex items

## CSS Grid: Two-Dimensional Layouts

CSS Grid is designed for laying out items in both rows and columns simultaneously. It's perfect for complex page layouts and component grids.

### Common Grid Use Cases

- Page layouts
- Image galleries
- Dashboard interfaces
- Article grids
- Complex form layouts

### Grid Basics

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
}
\`\`\`

### Responsive Grid Patterns

The \`auto-fill\` and \`auto-fit\` keywords make grids responsive without media queries:

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
\`\`\`

## Combining Grid and Flexbox

The real power comes from combining both tools. Use Grid for the overall page structure and Flexbox for component-level alignment:

\`\`\`css
/* Grid for page layout */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Flexbox for navigation items */
.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## Responsive Design Strategies

### Mobile-First Approach

Start with a single-column layout and progressively add complexity:

\`\`\`css
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .layout {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## When to Use Which

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimension | One-dimensional | Two-dimensional |
| Best for | Component layouts | Page layouts |
| Content flow | Content-driven | Layout-driven |
| Alignment | Excellent | Excellent |
| Nesting | Works great | Works great |

## Common Pitfalls

1. **Don't overuse Grid** for simple one-direction layouts
2. **Don't forget \`gap\`** — it's cleaner than margins
3. **Test on real devices** — not just browser DevTools
4. **Use CSS custom properties** for consistent spacing

## Conclusion

Mastering both CSS Grid and Flexbox gives you the complete toolkit for building any layout. Understanding their strengths and knowing when to use each will make your CSS cleaner, more maintainable, and more responsive.
    `.trim(),
    category: "Web Development",
    tags: ["CSS", "CSS Grid", "Flexbox", "Responsive Design", "Frontend"],
    author,
    publishedAt: "2026-03-20",
    updatedAt: "2026-03-25",
    featuredImage: "/images/css-grid-flexbox.jpg",
    readingTime: 7,
    featured: false,
  },
  {
    slug: "remote-work-productivity-system-developers",
    title: "The Ultimate Remote Work Productivity System for Developers",
    excerpt:
      "Build a personal productivity system that actually works. Learn time management, focus techniques, and workspace optimization tailored for remote developers.",
    content: `
Remote work offers incredible freedom, but without a solid productivity system, that freedom can turn into chaos. After years of remote development work, I've built a system that consistently delivers high output without burning out.

## The Foundation: Environment Design

Your physical workspace has a massive impact on your productivity. Here's how to optimize it:

### Workspace Setup

- **Dedicated workspace**: Separate your work area from living spaces
- **Ergonomic chair and desk**: Invest in your health—you'll spend 8+ hours here daily
- **Dual monitors**: One for code, one for reference/documentation
- **Good lighting**: Natural light reduces eye strain and improves mood
- **Noise management**: Quality headphones or a quiet room

### Digital Environment

- **Minimize notifications**: Turn off everything except critical alerts during focus time
- **Use a dedicated browser profile** for work
- **Keep your desktop clean**: A cluttered desktop equals a cluttered mind
- **Automate repetitive tasks**: Use scripts, aliases, and automation tools

## Time Management: The Time-Block Method

The single most impactful productivity technique I've found is **time-blocking**:

### How It Works

1. **Plan your day the night before**: Write down your top 3 priorities
2. **Block your calendar**: Assign specific time blocks to specific types of work
3. **Batch similar tasks**: Group meetings, code reviews, and deep work separately
4. **Protect your focus blocks**: Treat them as non-negotiable appointments

### Sample Developer Schedule

- **8:00–8:30**: Morning routine, review priorities
- **8:30–11:30**: Deep work block (coding, architecture)
- **11:30–12:00**: Code reviews and PR feedback
- **12:00–13:00**: Lunch and break
- **13:00–14:00**: Meetings and collaboration
- **14:00–16:30**: Deep work block (coding, debugging)
- **16:30–17:00**: Planning, documentation, wrap-up

## Focus Techniques

### The Pomodoro Method (Modified)

Instead of strict 25-minute intervals, use **flexible focus blocks**:

- **Warm-up** (10 min): Review code, read documentation
- **Deep focus** (50–90 min): Uninterrupted coding
- **Recovery** (10–15 min): Walk, stretch, hydrate

### Flow State Triggers

Achieving flow state—where coding feels effortless—requires:

1. **Clear goals**: Know exactly what you're building before starting
2. **Immediate feedback**: Use fast build tools and hot reload
3. **Challenge-skill balance**: Work on tasks slightly beyond your comfort zone
4. **Elimination of distractions**: Phone in another room, notifications off

## Communication Strategy

### Asynchronous-First

- **Write detailed messages**: Save everyone time by being thorough
- **Document decisions**: Use a shared wiki or Notion
- **Record video updates**: Sometimes a 2-minute Loom is better than a long email
- **Set response expectations**: "I check messages at 9am, 1pm, and 4pm"

### Meetings

- **Default to 25 minutes** instead of 30
- **Always have an agenda**
- **Take notes and share action items**
- **If it could be an email, make it an email**

## Energy Management

Productivity isn't just about time—it's about energy:

### Physical Energy

- **Exercise daily**: Even 20 minutes makes a huge difference
- **Stay hydrated**: Keep water at your desk
- **Eat well**: Avoid sugar crashes with balanced meals
- **Sleep 7–8 hours**: Non-negotiable for cognitive performance

### Mental Energy

- **Start with the hardest task**: Attack it when your energy is highest
- **Take real breaks**: Step away from screens completely
- **Practice mindfulness**: Even 5 minutes of meditation helps
- **Learn to say no**: Protect your time and energy

## Tools and Systems

### Task Management

Choose one system and stick with it:
- **Linear** for team projects
- **Todoist** or **Things 3** for personal tasks
- **GitHub Issues** for code-related tasks

### Knowledge Management

- **Obsidian or Notion** for notes and documentation
- **Bookmarks manager** for reference material
- **Code snippets library** for reusable patterns

## Conclusion

A productivity system isn't about working more hours—it's about making every hour count. Start with one technique from this guide, practice it for two weeks, then add another. Small, consistent improvements compound into massive productivity gains over time.
    `.trim(),
    category: "Productivity",
    tags: ["Remote Work", "Productivity", "Time Management", "Developer Life", "Work From Home"],
    author,
    publishedAt: "2026-03-15",
    updatedAt: "2026-03-18",
    featuredImage: "/images/remote-productivity.jpg",
    readingTime: 9,
    featured: true,
  },
  {
    slug: "start-profitable-saas-business-2026",
    title: "How to Start a Profitable SaaS Business in 2026",
    excerpt:
      "A step-by-step guide to building, launching, and growing a Software as a Service business. From idea validation to your first paying customers.",
    content: `
The SaaS (Software as a Service) market continues to grow rapidly, and 2026 presents unique opportunities for developers who want to build profitable software businesses. This guide covers everything from finding your idea to getting your first 100 customers.

## Finding Your SaaS Idea

The best SaaS ideas come from **solving real problems** you've experienced firsthand.

### Where to Find Ideas

1. **Your own pain points**: What tools do you wish existed?
2. **Industry forums**: What are people complaining about in your niche?
3. **Existing tools**: What's missing from products you already use?
4. **Emerging trends**: What new problems are being created by technology changes?

### Validation Before Building

Before writing a single line of code, validate your idea:

- **Talk to potential users**: Schedule 20 interviews with your target audience
- **Competitor analysis**: Study existing solutions and identify gaps
- **Landing page test**: Create a simple page and measure interest
- **Pre-sell**: Offer lifetime deals or early-bird pricing before launch

## Choosing Your Tech Stack

For a solo founder or small team, optimize for **speed of development**:

### Recommended Stack

- **Frontend**: Next.js with React
- **Backend**: Next.js API routes or a separate Node.js service
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js or Clerk
- **Payments**: Stripe
- **Hosting**: Vercel + AWS
- **Email**: Resend or SendGrid

### Why This Stack?

- **JavaScript/TypeScript everywhere** reduces context switching
- **Mature ecosystem** with excellent documentation
- **Generous free tiers** for bootstrapped startups
- **Easy to hire** if you need to scale the team later

## Building Your MVP

An MVP (Minimum Viable Product) should include **only the features needed to solve the core problem**.

### MVP Checklist

- User authentication (sign up, login, password reset)
- Core feature that solves the main problem
- Subscription billing (free trial → paid)
- Basic settings and profile management
- Email notifications for key events
- Simple admin dashboard

### What NOT to Include in Your MVP

- Social features (sharing, commenting)
- Advanced analytics
- Multiple integration options
- Custom themes or branding
- Mobile app (start with a responsive web app)

## Pricing Strategy

### Common SaaS Pricing Models

1. **Freemium**: Free tier with limited features, paid tiers for more
2. **Free trial**: Full access for 14 days, then paid
3. **Usage-based**: Pay for what you use
4. **Per-seat**: Price per team member

### Pricing Tips

- **Start higher than you think**: You can always lower prices
- **Offer annual plans** with 20% discount (improves cash flow)
- **Have three tiers**: Starter, Professional, Enterprise
- **Make the middle tier the obvious choice** (anchoring effect)

## Marketing for Developers

Many developer-founders struggle with marketing. Here's what actually works:

### Content Marketing

- Write blog posts solving problems your target audience has
- Create tutorials using your product
- Share case studies from early users
- Guest post on relevant industry blogs

### Community Building

- Be active on Twitter/X, sharing your building journey
- Engage in relevant communities (Reddit, Discord, Slack groups)
- Attend and speak at industry events
- Build in public—share progress, revenue, and challenges

### SEO Strategy

- Target long-tail keywords your audience searches for
- Create comprehensive guides that rank well
- Build backlinks through quality content and partnerships
- Optimize for featured snippets and zero-click searches

## Getting Your First 100 Customers

### Launch Strategy

1. **Build an email list** before launch (aim for 500+ subscribers)
2. **Launch on Product Hunt** with a compelling story
3. **Offer a launch discount** (30–50% off annual plans)
4. **Reach out to your network** and ask for referrals
5. **Follow up** with everyone who signed up for the free trial

### Retention

Getting customers is only half the battle. Keeping them requires:

- **Onboarding emails** that guide new users
- **In-app tutorials** for key features
- **Regular feature updates** based on user feedback
- **Excellent customer support** (respond within hours, not days)

## Financial Planning

### Key Metrics to Track

- **MRR** (Monthly Recurring Revenue)
- **Churn rate** (percentage of customers who cancel each month)
- **CAC** (Customer Acquisition Cost)
- **LTV** (Lifetime Value of a customer)
- **LTV:CAC ratio** (aim for 3:1 or higher)

## Conclusion

Building a profitable SaaS business is achievable for any developer with the right approach. Focus on solving a real problem, build a lean MVP, price it right, and market consistently. The journey is long, but the rewards—both financial and personal—are worth it.
    `.trim(),
    category: "Online Business",
    tags: ["SaaS", "Startup", "Business", "Entrepreneurship", "Online Business"],
    author,
    publishedAt: "2026-03-10",
    updatedAt: "2026-03-14",
    featuredImage: "/images/saas-business.jpg",
    readingTime: 11,
    featured: false,
  },
  {
    slug: "typescript-best-practices-clean-code",
    title: "TypeScript Best Practices for Writing Clean, Maintainable Code",
    excerpt:
      "Level up your TypeScript skills with these proven patterns and best practices. Write code that's type-safe, readable, and easy to maintain.",
    content: `
TypeScript has become the standard for professional JavaScript development. But simply using TypeScript doesn't automatically make your code better—you need to follow best practices to get the most out of the type system.

## Strict Mode: Always

Enable strict mode in your \`tsconfig.json\`. This turns on all strict type-checking options:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

These settings catch many common errors at compile time rather than runtime.

## Type Inference: Use It Wisely

TypeScript has excellent type inference. Don't annotate everything—let the compiler do its job:

\`\`\`typescript
// ❌ Unnecessary annotation
const name: string = "John";
const numbers: number[] = [1, 2, 3];

// ✅ Let TypeScript infer
const name = "John";
const numbers = [1, 2, 3];
\`\`\`

**Do** annotate function parameters and return types for public APIs:

\`\`\`typescript
// ✅ Explicit return types for public functions
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
\`\`\`

## Use Union Types Instead of Enums

Enums have quirks and add runtime code. Prefer union types for simple cases:

\`\`\`typescript
// ❌ Enum
enum Status {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}

// ✅ Union type
type Status = "active" | "inactive" | "pending";
\`\`\`

## Discriminated Unions for Complex Types

When modeling types with variants, use discriminated unions:

\`\`\`typescript
type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string }
  | { status: "loading" };

function handleResponse(response: ApiResponse<User>) {
  switch (response.status) {
    case "success":
      console.log(response.data); // TypeScript knows data exists
      break;
    case "error":
      console.error(response.error); // TypeScript knows error exists
      break;
    case "loading":
      console.log("Loading...");
      break;
  }
}
\`\`\`

## Utility Types

TypeScript provides powerful utility types. Learn and use them:

\`\`\`typescript
// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;

// Pick specific properties
type UserPreview = Pick<User, "name" | "avatar">;

// Omit specific properties
type UserWithoutPassword = Omit<User, "password">;

// Make properties readonly
type ReadonlyUser = Readonly<User>;
\`\`\`

## Generic Functions

Write reusable functions with generics:

\`\`\`typescript
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// TypeScript infers the return type
const num = getFirstElement([1, 2, 3]); // number | undefined
const str = getFirstElement(["a", "b"]); // string | undefined
\`\`\`

### Constrained Generics

Use \`extends\` to constrain generics:

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "John", age: 30 };
const name = getProperty(user, "name"); // string
const age = getProperty(user, "age");   // number
\`\`\`

## Error Handling

Create custom error types for better error handling:

\`\`\`typescript
class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

// Type-safe error handling
function handleError(error: unknown): void {
  if (error instanceof AppError) {
    console.error(\`[\${error.code}] \${error.message}\`);
  } else if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred");
  }
}
\`\`\`

## Avoid \`any\` Like the Plague

Use \`unknown\` instead of \`any\` when the type is truly unknown:

\`\`\`typescript
// ❌ Using any
function processData(data: any) {
  return data.name; // No type checking
}

// ✅ Using unknown
function processData(data: unknown) {
  if (typeof data === "object" && data !== null && "name" in data) {
    return (data as { name: string }).name;
  }
  throw new Error("Invalid data");
}
\`\`\`

## Type Guards

Create custom type guards for runtime type checking:

\`\`\`typescript
interface Dog {
  bark(): void;
  breed: string;
}

interface Cat {
  meow(): void;
  color: string;
}

function isDog(pet: Dog | Cat): pet is Dog {
  return "bark" in pet;
}

function handlePet(pet: Dog | Cat) {
  if (isDog(pet)) {
    pet.bark(); // TypeScript knows this is a Dog
  } else {
    pet.meow(); // TypeScript knows this is a Cat
  }
}
\`\`\`

## Organizing Types

- Keep types close to where they're used
- Export shared types from a dedicated \`types\` directory
- Co-locate component props with their components
- Use barrel exports (\`index.ts\`) for type modules

## Conclusion

Following these TypeScript best practices will make your code more robust, readable, and maintainable. The type system is your ally—embrace it fully, enable strict mode, and let it catch bugs before they reach production.
    `.trim(),
    category: "Technology",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Clean Code", "Programming"],
    author,
    publishedAt: "2026-03-05",
    updatedAt: "2026-03-08",
    featuredImage: "/images/typescript-practices.jpg",
    readingTime: 12,
    featured: false,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, "-") === category
  );
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count: number = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

export function getRelatedArticles(slug: string, count: number = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return articles
    .filter((a) => a.slug !== slug)
    .filter(
      (a) =>
        a.category === article.category ||
        a.tags.some((tag) => article.tags.includes(tag))
    )
    .slice(0, count);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  articles.forEach((a) => a.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.category.toLowerCase().includes(q)
  );
}
