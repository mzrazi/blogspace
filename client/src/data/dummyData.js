export const DUMMY_BLOG_POSTS = [
  {
    id: '1',
    title: 'Getting Started with React Hooks',
    content: `React Hooks have revolutionized how we write React components. In this comprehensive guide, we'll explore the most commonly used hooks and learn how to build custom hooks for your applications.

useState is the most fundamental hook that lets you add state to functional components. It returns an array with the current state value and a setter function.

useEffect is another essential hook that lets you perform side effects in your components. It's the combination of componentDidMount, componentDidUpdate, and componentWillUnmount from class components.

Custom hooks are a powerful way to reuse stateful logic between components. They're just JavaScript functions that use other hooks and follow the naming convention of starting with "use".

Here are some best practices when working with React Hooks:
- Always call hooks at the top level of your React function
- Only call hooks from React functions
- Use multiple useEffect hooks to separate concerns
- Use useCallback and useMemo to optimize performance when needed

React Hooks make your code more readable, testable, and reusable. They encourage functional programming patterns and help you avoid the complexity of class components.`,
    preview: 'Learn how React Hooks can simplify your component logic and make your code more reusable. We\'ll cover useState, useEffect, and custom hooks.',
    author: { id: '1', name: 'John Doe' },
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS for Modern Web Design',
    content: `Tailwind CSS is a utility-first CSS framework that has gained massive popularity among developers. Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that let you build custom designs without leaving your HTML.

The beauty of Tailwind lies in its approach to styling. Instead of writing custom CSS, you compose your designs using predefined utility classes. This leads to faster development, smaller CSS bundles, and more maintainable code.

Key benefits of Tailwind CSS:
- Utility-first approach for rapid prototyping
- Responsive design made easy with breakpoint prefixes
- Consistent design system with predefined spacing, colors, and typography
- Easy customization through configuration
- Excellent performance with PurgeCSS integration

Getting started with Tailwind is straightforward. You can install it via npm, configure your build process, and start using the utility classes immediately.

Some popular utility patterns include:
- Flexbox layouts: flex, justify-center, items-center
- Spacing: p-4, m-8, space-y-2
- Colors: bg-blue-500, text-gray-900
- Typography: text-xl, font-bold, leading-relaxed

Tailwind CSS empowers developers to create beautiful, responsive designs quickly while maintaining consistency across projects.`,
    preview: 'Discover how Tailwind CSS can speed up your development workflow with utility-first styling. Perfect for modern web applications.',
    author: { id: '2', name: 'Jane Smith' },
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-14T14:20:00Z'
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js',
    content: `Node.js has become the go-to runtime for building scalable server-side applications. Its event-driven, non-blocking I/O model makes it perfect for data-intensive applications that run across distributed devices.

When building APIs with Node.js, there are several key principles to follow:

1. Use Express.js for routing and middleware
2. Implement proper error handling
3. Use environment variables for configuration
4. Implement authentication and authorization
5. Add rate limiting and security middleware
6. Use a proper logging system
7. Implement API versioning
8. Write comprehensive tests

Database integration is crucial for most APIs. Whether you choose MongoDB, PostgreSQL, or another database, make sure to:
- Use connection pooling
- Implement proper error handling
- Use migrations for schema changes
- Optimize queries for performance

Security is paramount when building APIs. Always:
- Validate and sanitize input data
- Use HTTPS in production
- Implement proper authentication (JWT, OAuth)
- Add CORS headers appropriately
- Use security middleware like Helmet.js

Performance optimization techniques include:
- Caching with Redis
- Database query optimization
- Using CDNs for static assets
- Implementing pagination
- Using compression middleware

Building scalable APIs requires careful planning, but Node.js provides all the tools you need to create robust, high-performance applications.`,
    preview: 'Learn the essential patterns and best practices for building scalable, secure APIs with Node.js and Express.',
    author: { id: '1', name: 'John Doe' },
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'The Future of Web Development: Trends to Watch',
    content: `Web development is constantly evolving, with new technologies, frameworks, and methodologies emerging regularly. As we look toward the future, several trends are shaping how we build web applications.

Artificial Intelligence Integration:
AI is becoming increasingly integrated into web development workflows. From AI-powered code completion to automated testing and design generation, developers are leveraging AI to increase productivity and create better user experiences.

WebAssembly (WASM):
WebAssembly allows developers to run code written in languages like C++, Rust, and Go directly in the browser at near-native speed. This opens up new possibilities for web applications, especially for performance-critical tasks.

Progressive Web Apps (PWAs):
PWAs continue to bridge the gap between web and native applications. With improved offline capabilities, push notifications, and app-like experiences, PWAs are becoming the preferred choice for many businesses.

Serverless Architecture:
Serverless computing is changing how we deploy and scale applications. Functions as a Service (FaaS) platforms like AWS Lambda, Vercel Functions, and Netlify Functions allow developers to focus on code rather than infrastructure.

Component-Driven Development:
The trend toward component-based architectures continues with tools like Storybook, design systems, and micro-frontends gaining popularity. This approach promotes reusability and maintainability.

Edge Computing:
Edge computing brings computation closer to users, reducing latency and improving performance. CDNs are evolving into edge computing platforms that can run full applications.

The future of web development is exciting, with new technologies making it easier to build fast, scalable, and user-friendly applications.`,
    preview: 'Explore the emerging trends and technologies that are shaping the future of web development, from AI integration to edge computing.',
    author: { id: '2', name: 'Jane Smith' },
    createdAt: '2024-01-12T16:45:00Z',
    updatedAt: '2024-01-12T16:45:00Z'
  }
];

export const getUserBlogs = (userId) => {
  return DUMMY_BLOG_POSTS.filter(post => post.author.id === userId);
};

export const getBlogById = (id) => {
  return DUMMY_BLOG_POSTS.find(post => post.id === id);
};