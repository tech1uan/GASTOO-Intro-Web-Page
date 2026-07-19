// All copy + image references live here so components stay dumb/reusable.
// Swap the `image` fields below with real paths (e.g. "/screenshots/home.png")
// once you drop files into /public.

export const navLinks = [
  { label: 'Why Gastoo', href: '#why' },
  { label: 'Take a look', href: '#showcase' },
  { label: 'Meet the Dev', href: '#developer' },
  { label: 'Notifications', href: '#notifications' },
]

export const hero = {
  eyebrow: 'Built for how Pinoys actually spend',
  titleLine1: 'Expenses at',
  titleAccent: 'one glance.',
  subtitle:
    "Gastoo turns your daily gastos into a habit you can actually see — budgets, savings goals, and a mascot who notices when you're doing great (or overdoing the milk tea).",
  primaryCta: { label: 'See the app', href: '#showcase', icon: 'fa-solid fa-mobile-screen-button' },
  secondaryCta: { label: 'Meet the developer', href: '#developer', icon: 'fa-solid fa-code' },
  // IMAGE TEMPLATE: set this to your Home Dashboard screenshot path, e.g. "/screenshots/home.png"
  phoneImage: '../gastoo_photos/hero-mockup.png',
}

export const features = [
  {
    icon: 'fa-solid fa-chart-pie',
    color: 'var(--mint-300)',
    bg: 'rgba(7,159,159,.15)',
    title: 'Everything, one glance',
    body: "Today's budget, your top categories, and total expenses sit on a single home screen — no digging through menus to know where you stand.",
  },
  {
    icon: 'fa-solid fa-face-smile',
    color: 'var(--gold)',
    bg: 'rgba(241,196,15,.15)',
    title: 'Gastoo, your mood mascot',
    body: "Your mascot's mood shifts with your spending — a nudge that feels like a friend keeping tabs, not a spreadsheet judging you.",
  },
  {
    icon: 'fa-solid fa-piggy-bank',
    color: 'var(--coral)',
    bg: 'rgba(224,106,106,.15)',
    title: 'Savings that stick',
    body: 'Set a goal, watch the bar fill up, and get a nudge before you slip. Daily or monthly budgets, whichever pace fits your gastos.',
  },
  {
    icon: 'fa-solid fa-table-cells-large',
    color: 'var(--mint-300)',
    bg: 'rgba(69,231,238,.15)',
    title: 'A heatmap of your habits',
    body: 'A GitHub-style spending heatmap shows the pattern behind your peaks — the paydays, the splurges, the quiet weeks.',
  },
  {
    icon: 'fa-solid fa-bell',
    color: '#1dc49a',
    bg: 'rgba(29,196,154,.15)',
    title: 'Notifications that know when to talk',
    body: "Threshold-based reminders that ease up when you're on track and speak up when you're close to a limit.",
  },
  {
    icon: 'fa-solid fa-file-export',
    color: 'var(--gold)',
    bg: 'rgba(245,196,99,.15)',
    title: 'Your data, exportable',
    body: 'Pull a clean PDF of your transactions whenever you need a record — no lock-in, no spreadsheets to rebuild from scratch.',
  },
]

export const mascotIntro = {
  kicker: 'Meet Gastoo',
  title: 'Say hi to your money buddy.',
  subtitle: "He's not just a logo — Gastoo reacts to how you spend and shows up across the app to keep you on track.",
  // IMAGE TEMPLATE: e.g. "/mascot/gastoo-character.png"
  image: '/gastoo-feature-section.png',
  name: 'Gastoo',
  tagline: 'Mood-tracking money mascot',
}

export const mascotBubbles = [
  { icon: 'fa-solid fa-receipt', text: 'I track every gasto, big or small.', position: 'tl' },
  { icon: 'fa-solid fa-table-cells-large', text: 'I turn your spending into a heatmap.', position: 'tr' },
  { icon: 'fa-solid fa-bell', text: 'I nudge you before you blow the budget.', position: 'ml' },
  { icon: 'fa-solid fa-piggy-bank', text: 'I cheer when your savings goal fills up.', position: 'mr' },
  { icon: 'fa-solid fa-mobile-screen-button', text: 'I send tips straight to your lock screen.', position: 'bl' },
  { icon: 'fa-solid fa-file-export', text: 'I export your data as PDF, anytime.', position: 'br' },
]

export const showcaseSlots = [
  {
    id: 'home',
    icon: 'fa-solid fa-house',
    label: 'Home Dashboard',
    caption: 'Home',
    note: 'Budget, categories, savings — all at once',
    
    image: '../gastoo_photos/home_page.jpg',
  },
  {
    id: 'add-expense',
    icon: 'fa-solid fa-receipt',
    label: 'Add Expense',
    caption: 'Add Expense',
    note: 'Log a gasto in three taps',
    image: '../gastoo_photos/add_expense.jpg', 
  },
  {
    id: 'analytics',
    icon: 'fa-solid fa-chart-pie',
    label: 'Analytics',
    caption: 'Analytics',
    note: 'Spending vs budget, heatmap, insights',
    image: '../gastoo_photos/analytics_page.jpg', // "/screenshots/analytics.png"
  },
  {
    id: 'profile',
    icon: 'fa-solid fa-user',
    label: 'Profile',
    caption: 'Profile',
    note: 'Stats, settings, account controls',
    image: '../gastoo_photos/profile_page.jpg', // "/screenshots/profile.png"
  },
  {
  id: 'finance-actions',
  icon: 'fa-solid fa-wallet',
  label: 'Finance Hub',
  caption: 'Manage Your Finances',
  note: 'Manage expenses, savings, and your budget',
  image: '../gastoo_photos/finance-actions.jpg',
},
]

export const stats = [
  { value: '₱', label: 'Peso-native, built for PH' },
  { value: '10', label: 'Expense categories' },
  { value: '2', label: 'Budget modes — daily & monthly' },
  { value: '24/7', label: 'Mascot on duty' },
]


export const pushNotification = {
  kicker: 'Highlight Feature',
  title: 'Nudges that reach you, even off-app.',
  body: "Gastoo sends real web push notifications straight to your lock screen — smart tips, budget warnings, and reminders that show up whether the app is open or not.",
  lockscreen: {
    carrier: 'DITO',
    network: 'TM',
    time: '11:25',
    meridiem: 'AM',
    date: 'Sun, Jul 12',
    battery: '67',
  },
  notification: {
    appName: 'GASTOO',
    source: 'gastoos.onrender.com',
    timestamp: 'now',
    title: "Gastoo's Tip",
    body: 'Small daily expenses add up fast — log everything, even ₱20 snacks.',
  },
  cta: {
    label: 'Open Gastoo App',
    href: 'https://gastoos.onrender.com',
    icon: 'fa-solid fa-arrow-up-right-from-square',
  },
}

export const developer = {
  name: 'Juan Miguel Austria',
  role: 'Full Stack Developer',

  avatar: '../gastoo_photos/jm_suit.png',
  bio: "Juan Miguel Austria is a full stack developer who designed, built, and shipped Gastoo end to end — from the MySQL schema and Express API through to every screen in the app. Gastoo grew out of a simple question: what would a budgeting app look like if it actually understood how Filipinos spend, save, and talk about money?",
  highlights: [
    { icon: 'fa-solid fa-layer-group', title: 'End-to-end build', note: 'Database to UI, solo' },
    { icon: 'fa-solid fa-peso-sign', title: 'PH-first design', note: 'Made for local spending habits' },
    { icon: 'fa-solid fa-bolt', title: 'Ships fast', note: 'Idea to working feature, quickly' },
  ],
  stack: ['Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'Vanilla JS', 'REST APIs'],
  socials: [
    { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/tech1uan' },
    { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-miguel-austria-917583375' },
    { icon: 'fa-solid fa-globe', label: 'Portfolio', href: 'https://jm-austria-web-portfolio.vercel.app/' },
    { icon: 'fa-solid fa-envelope', label: 'Gmail', href: '' },
  ],
}

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/tech1uan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-miguel-austria-917583375/' },
  { label: 'Portfolio', href: 'https://jm-austria-web-portfolio.vercel.app/' },
]
