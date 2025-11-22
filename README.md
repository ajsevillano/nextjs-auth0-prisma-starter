# BookGift

BookGift is a Next.js application designed to manage book gifts. It features secure authentication using Auth0 and persists data using a local MySQL database with Prisma ORM.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [Auth0](https://auth0.com/) (v4 SDK)
- **Database:** MySQL
- **ORM:** [Prisma](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MySQL](https://www.mysql.com/) (running locally or accessible via URL)
- An [Auth0](https://auth0.com/) account and tenant

## ⚙️ Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Configuration**:
    Create a `.env` file in the root directory. You can use the following template:

    ```env
    # Auth0 Configuration
    AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
    AUTH0_BASE_URL='http://localhost:3000'
    AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN'
    AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
    AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'

    # Database Configuration
    DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/bookgift"
    ```

    *   Replace `YOUR_AUTH0_...` with your actual Auth0 application credentials.
    *   Update `DATABASE_URL` with your local MySQL credentials.

4.  **Database Setup**:
    Initialize the Prisma client and push the schema to your database:

    ```bash
    # Generate Prisma Client
    npx prisma generate

    # Push schema to the database (for prototyping)
    npx prisma db push
    ```

## 🏃‍♂️ Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

-   `app/`: Contains the application routes and pages (Next.js App Router).
    -   `api/auth/[auth0]/`: Handles Auth0 authentication routes.
    -   `dashboard/`: Example of a protected route.
-   `lib/`: Utility libraries.
    -   `auth0.ts`: Auth0 client configuration.
-   `prisma/`: Database schema and configuration.
    -   `schema.prisma`: Defines the data model.

## 🔐 Authentication Flow

This project uses the **Auth0 Next.js SDK**.

-   **Login**: `/api/auth/login` - Redirects to Auth0 Universal Login.
-   **Logout**: `/api/auth/logout` - Clears the session.
-   **Session**: The session is managed automatically by the SDK. You can access it server-side using `auth0.getSession()`.

## 📝 Notes

-   Ensure your MySQL server is running before starting the application.
-   If you modify `prisma/schema.prisma`, remember to run `npx prisma generate` and update your database.
