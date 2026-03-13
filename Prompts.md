# Prompt Engineering - Data Hub API

This file demonstrates structured prompts designed to guide an AI assistant to generate useful backend code and explanations related to the Data Hub REST API project.

---

## Prompt 1 — Generate Production-Ready API Structure

**Prompt:**

You are a senior backend engineer specializing in Node.js and Express.
Refactor the following simple Express API (single server.js file) into a scalable production-ready structure.

Requirements:

* Use Node.js and Express.
* Separate the project into folders: `routes`, `controllers`, and `middleware`.
* Move CRUD logic for blog posts into a controller file.
* Move the logger middleware into a separate middleware file.
* Keep the same endpoints:

  * GET /posts
  * GET /posts/:id
  * POST /posts
  * PUT /posts/:id
  * DELETE /posts/:id
  * POST /login
* Maintain the mock database array `blogPosts`.
* Show the complete folder structure and code for each file.

Output format:

1. Folder structure
2. Code for each file
3. Explanation of why modular architecture improves maintainability

Goal: Convert a beginner Express API into a professional backend architecture.

---

## Prompt 2 — Create Automated API Testing Plan

**Prompt:**

Act as a backend QA engineer responsible for testing a REST API built with Node.js and Express.

The API contains the following endpoints:

* GET /posts
* GET /posts/:id
* POST /posts
* PUT /posts/:id
* DELETE /posts/:id
* POST /login

Tasks:

1. Create a complete API testing plan.
2. List test cases for each endpoint.
3. Include edge cases such as:

   * invalid IDs
   * missing request body fields
   * wrong login credentials
4. Provide example Thunder Client or Postman request configurations.
5. Explain expected responses and HTTP status codes.

Output format:

* Endpoint
* Test Case
* Request Example
* Expected Response
* Status Code

Goal: Demonstrate how to systematically validate API functionality and error handling.
