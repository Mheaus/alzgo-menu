# Alzgo Menu

This project is a React-based menu component for the Alzgo application. It includes both desktop and mobile navigation components, utilizing Vite for the build process and Tailwind CSS for styling.

## Project Structure

- `src/`: Contains the source code for the project.
  - `components/`: React components for the menu.
  - `utils/`: Utility functions used across the project.
  - `assets/`: Static assets like images.
- `public/`: Static files that are served directly.
- `vite.config.ts`: Vite configuration file.
- `.env`: Environment variables.

## Scripts

- `dev`: Start the development server.
- `build`: Build the project for production.
- `lint`: Run TypeScript, Prettier, and ESLint checks.
- `lint:prettier`: Run Prettier checks.
- `preview`: Preview the production build.

## Environment Variables

- `VITE_BASE_URL`: Base URL for the application.
- `VITE_NAV_SELECTOR`: CSS selector for the navigation element.

## DOM Parsing Mechanism

The menu items are parsed from the DOM using a custom utility function. The `parseMenu` function takes the HTML content of the navigation element and converts it into a JSON structure. This JSON structure is then enhanced with additional properties like `id`, `to`, and `img` using the `enhanceMenuWithCustomKeys` function.

### Example

```typescript
import parseMenu from './utils/dom-parser';
import { enhanceMenuWithCustomKeys } from './utils/compute-menu-items';

const menuEl = document.querySelector('nav');
const menuJSON = parseMenu(menuEl?.outerHTML || '');
const navbarData = enhanceMenuWithCustomKeys(menuJSON);

console.log(navbarData);
```

This mechanism allows for dynamic generation of the menu structure based on the HTML content, making it easy to update the menu without changing the code.

## Deployment

This project is deployed on Vercel. The `main` branch is used for development, and the `production` branch is used for production deployments.

### Branching Strategy

- `main`: Development branch. All new features and bug fixes are merged here.
- `production`: Production branch. Only stable and tested code is merged here for deployment.

### Deployment Steps

1. Push changes to the `main` branch for development.
2. Once the changes are tested and stable, create a pull request to merge `main` into `production`.
3. After the pull request is approved and merged, Vercel will automatically deploy the changes to the production environment.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/alzgo-menu.git
   ```
2. Navigate to the project directory:
   ```sh
   cd alzgo-menu
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```

## Usage

1. Start the development server:
   ```sh
   pnpm run dev
   ```
2. Build the project for production:
   ```sh
   pnpm run build
   ```
3. Preview the production build:
   ```sh
   pnpm run preview
   ```

## License

This project is licensed under the MIT License.
