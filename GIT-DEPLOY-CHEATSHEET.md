# 🚀 Git Deploy Cheat Sheet for Rooted In Relationship

## Quick Deploy Commands (Copy & Paste)
```bash
cd "C:/Users/Tina/rooted-in-relationship"
git add -A
git commit -m "Update website"
git push origin main
```

---

## Step-by-Step Guide

### 1️⃣ After Claude Code Makes Changes

**FIRST** - Check what changed:
```bash
cd "C:/Users/Tina/rooted-in-relationship"
git status
```

### 2️⃣ Deploy to Vercel (3 Commands)

```bash
# Command 1: Stage all changes
git add -A

# Command 2: Commit with a message
git commit -m "Describe what changed"

# Command 3: Push to GitHub (triggers Vercel)
git push origin main
```

### 3️⃣ Check Deployment
- Visit: https://vercel.com/dashboard
- Look for green checkmark ✅
- Site updates in ~3-5 minutes

---

## Common Commit Messages (Examples)

```bash
git commit -m "Update homepage content"
git commit -m "Add new resource library"
git commit -m "Fix navigation links"
git commit -m "Update contact form"
git commit -m "Add email capture"
git commit -m "Update colors and styling"
```

---

## Troubleshooting

### ❌ "Nothing to commit"
- No changes were made
- Changes already pushed

### ❌ "Failed to push"
```bash
git pull origin main
git push origin main
```

### ❌ Vercel not updating
1. Check https://vercel.com/dashboard for errors
2. Make sure you pushed to `main` branch
3. Wait 5 minutes (sometimes it's slow)

---

## One-Line Deploy (Advanced)
Copy this entire line and paste in terminal:
```bash
cd "C:/Users/Tina/rooted-in-relationship" && git add -A && git commit -m "Update website" && git push origin main
```

---

## When to Deploy

✅ **DEPLOY WHEN:**
- Claude finishes making changes
- You tested locally (localhost:3008)
- Everything looks good

❌ **DON'T DEPLOY WHEN:**
- You see errors
- Claude is still working
- You want to make more changes

---

## Terminal Tips

- **Up Arrow ↑** = Repeat last command
- **Tab** = Auto-complete file names
- **Ctrl+C** = Cancel/stop command
- **Clear** = Clear terminal screen

---

## Your Project Info

- **Local URL:** http://localhost:3008
- **GitHub:** https://github.com/TinaBrenkus/rooted-in-relationship
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Live Site:** [Check your Vercel dashboard for URL]

---

## Remember

1. Claude Code edits files → Local only
2. You commit & push → Goes to GitHub
3. GitHub triggers Vercel → Goes live

**The magic command sequence:**
`add` → `commit` → `push` = LIVE! 🎉