# Multilingual FAQ API

## Objective

The objective of this project is to create a multilingual FAQ management system using Node.js and Express. The system allows users to manage FAQs with support for multiple languages and provides a basic UI for managing FAQs.

## Features

- **Create**, **Retrieve**, **Update**, and **Delete** FAQs.
- **Support for multiple languages**: Translations are handled automatically via the **Google Translate API**.
- **Caching mechanism** using **Redis** for faster responses.
- **WYSIWYG support** for formatting FAQ answers using **Quill.js**.
- **REST API** for interacting with FAQ data.
- **Admin panel** for easy management of FAQs.
- **Filtering FAQs by language**.
- **Docker support** for easy deployment.
- **Unit testing** using **Jest** and **Supertest**.
- Follows best practices for code quality, testing, and commit messages.

## Tech Stack

- **Node.js**: Backend JavaScript runtime.
- **Express**: Web framework for building RESTful APIs.
- **Mongoose**: ORM for interacting with the MongoDB database.
- **Redis**: Caching for translations to improve performance.
- **Google Translate API**: For automatic translation of FAQ content.
- **Quill.js**: WYSIWYG editor for rich text formatting.
- **Jest & Supertest**: For writing and running tests.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rishuraj1/multilingual-faq-api.git
   cd multilingual-faq-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=8000
   REDIS_HOST=your_redis_host
   REDIS_PORT=your_redis_port
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Usage

### Fetch FAQs in English (default)

```bash
curl http://localhost:8000/api/faqs/
```

### Fetch FAQs in Hindi

```bash
curl http://localhost:8000/api/faqs/?lang=hi
```

### Fetch FAQs in Bengali

```bash
curl http://localhost:8000/api/faqs/?lang=bn
```