## Description

This project uses Next.js with shadcn/ui for creating a text extraction application with Langchain. It was created following the tutorial in this article: [Langchain Extraction Tutorial](https://js.langchain.com/docs/tutorials/extraction). The project demonstrates how to extract structured information, such as names, dates, and other entities, from unstructured text using Langchain and OpenAI's language models.

## Video Demonstration

Watch the video below to see an example usage of the app:

[langchain-extraction.webm](https://github.com/user-attachments/assets/559e6ef6-d8ca-4392-acb0-d80337d44a7a)

## Technologies Used

This project leverages the following technologies:

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **shadcn/ui**: A component library for building user interfaces.
- **Langchain**: A framework for developing applications powered by language models.
- **OpenAI**: Used as the chat model for generating responses.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vercel**: Hosting platform for deploying the application.

## Getting Started

First, create a `.env.local` file with your API keys by using `.env.local.template` as a template:

```bash
cp .env.local.template .env.local
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Contact

For any questions or feedback, please contact Juanjo Fernández at [juanjo.fernandez@haa.st](mailto:juanjo.fernandez@haa.st).
