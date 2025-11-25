# Analytics Setup Instructions

## ✅ Your Google Analytics ID: G-EGP42EEFP3

### Setup Steps:

1. **Create/Edit `.env.local` file in the project root:**
   ```bash
   # In the portfolionext folder, create or edit .env.local
   ```

2. **Add this line to `.env.local`:**
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-EGP42EEFP3
   ```

3. **For local testing, restart the dev server:**
   ```bash
   npm run dev
   ```

4. **When deploying (Vercel/Netlify/etc):**
   - Add the environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` with value `G-EGP42EEFP3`
   - Deploy your site

### Testing Analytics:

1. Visit your **deployed** portfolio (analytics won't work on localhost by default)
2. Open [Google Analytics](https://analytics.google.com)
3. Go to **Reports** → **Realtime**
4. You should see yourself as an active visitor!

---

**Note:** The implementation uses Next.js optimized Google Analytics loading via `@next/third-parties`, which is better than manual script injection for performance and automatic page tracking.
