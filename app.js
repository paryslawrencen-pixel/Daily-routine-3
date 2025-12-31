/**
 * PERSONAL SELF-IMPROVEMENT TRACKER
 * Smart Schedule Engine
 */

const RECIPE_BOOK = {
  'Baked Salmon & Sweet Potato with Asparagus': {
    kcals: 550, protein: 45,
    ingredients: ['2 Salmon Fillets', '2 Small Sweet Potatoes', '1 Bunch Asparagus', 'Olive Oil', 'Lemon', 'Salt/Pepper'],
    steps: ['Preheat oven to 200°C.', 'Dice sweet potatoes and toss in oil/salt, roast for 25 mins.', 'Season salmon and asparagus, add to tray for last 12-15 mins.', 'Squeeze lemon over fish and serve.']
  },
  'Beef Mince & Pasta with Mixed Veg': {
    kcals: 650, protein: 40,
    ingredients: ['180g Beef Mince (5%)', '80g Pasta', '1 Cup Frozen Mixed Veg', 'Tomato Puree/Seasoning'],
    steps: ['Boil pasta as per pack instructions.', 'Brown beef mince in a pan until cooked through.', 'Add mixed veg and tomato puree to beef.', 'Drain pasta and combine with beef/veg mix.']
  },
  'Chicken Breast & Brown Rice with Broccoli': {
    kcals: 600, protein: 50,
    ingredients: ['1 Large Chicken Breast', '75g Brown Rice', '1 Cup Broccoli Florets', 'Olive Oil', 'Garlic/Herbs'],
    steps: ['Boil brown rice (takes 20-25 mins).', 'Season and pan-fry chicken breast in oil until golden (15 mins).', 'Steam broccoli for 5-7 mins.', 'Serve chicken over rice with broccoli on the side.']
  },
  'Turkey Mince & Couscous with Peppers': {
    kcals: 580, protein: 45,
    ingredients: ['180g Turkey Mince', '80g Couscous', '1 Large Bell Pepper', 'Chicken Stock', 'Seasoning'],
    steps: ['Sauté diced pepper and turkey mince until cooked.', 'Prepare couscous by soaking in boiling chicken stock (5 mins).', 'Fluff couscous with a fork.', 'Mix turkey/peppers into the couscous.']
  },
  'Canned Tuna & Pasta Salad with Sweetcorn': {
    kcals: 500, protein: 35,
    ingredients: ['1 Canned Tuna (in brine)', '80g Pasta', 'Small Tin Sweetcorn', 'Greek Yogurt (as mayo substitute)', 'Black Pepper'],
    steps: ['Boil and drain pasta, let it cool slightly.', 'Drain tuna and sweetcorn.', 'Mix tuna, corn, and pasta with 2 tbsp Greek yogurt.', 'Season with plenty of black pepper.']
  },
  'Salmon Fillet & Quinoa with Mixed Veg': {
    kcals: 570, protein: 45,
    ingredients: ['1 Salmon Fillet', '75g Quinoa', '1 Cup Frozen Mixed Veg', 'Soy Sauce (optional)'],
    steps: ['Rinse and boil quinoa as per pack (15 mins).', 'Pan-fry or bake salmon fillet.', 'Steam mixed veg.', 'Combine all and add a splash of soy sauce.']
  },
  'Beef Mince & Brown Rice with Spinach': {
    kcals: 620, protein: 40,
    ingredients: ['180g Beef Mince', '75g Brown Rice', '2 Handfuls Spinach', 'Onion/Seasoning'],
    steps: ['Boil brown rice.', 'Brown beef and onions in a pan.', 'Wilt spinach into the beef at the very end.', 'Serve over rice.']
  },
  'Turkey Mince & Pasta with Mixed Veg': {
    kcals: 590, protein: 45,
    ingredients: ['180g Turkey Mince', '80g Pasta', '1 Cup Mixed Veg', 'Herbs/Seasoning'],
    steps: ['Boil pasta.', 'Sauté turkey mince until browned.', 'Add veg and seasoning.', 'Mix everything together.']
  },
  'Chicken Breast & Sweet Potato with Mixed Veg': {
    kcals: 580, protein: 50,
    ingredients: ['1 Large Chicken Breast', '2 Small Sweet Potatoes', '1 Cup Mixed Veg'],
    steps: ['Roast diced sweet potatoes at 200°C (25 mins).', 'Pan-fry chicken breast.', 'Steam mixed veg.', 'Combine and serve.']
  },
  'Canned Tuna & Brown Rice with Spinach': {
    kcals: 550, protein: 35,
    ingredients: ['1 Canned Tuna', '75g Brown Rice', '2 Handfuls Spinach', 'Lemon/Pepper'],
    steps: ['Boil rice.', 'Wilt spinach.', 'Drain tuna and mix with rice and spinach.', 'Season with lemon and pepper.']
  },
  'Turkey Mince & Pasta with Peppers': {
    kcals: 590, protein: 45,
    ingredients: ['180g Turkey Mince', '80g Pasta', '1 Bell Pepper', 'Tomato Sauce'],
    steps: ['Boil pasta.', 'Cook turkey and peppers in a pan.', 'Add tomato sauce.', 'Mix with pasta.']
  },
  'Baked Salmon & Brown Rice with Broccoli': {
    kcals: 570, protein: 45,
    ingredients: ['1 Salmon Fillet', '75g Brown Rice', '1 Cup Broccoli'],
    steps: ['Boil rice.', 'Bake salmon (15 mins).', 'Steam broccoli.', 'Serve together.']
  },
  'Beef Mince & Sweet Potato with Mixed Veg': {
    kcals: 620, protein: 40,
    ingredients: ['200g Beef Mince', '2 Small Sweet Potatoes', '1 Cup Mixed Veg'],
    steps: ['Roast sweet potatoes.', 'Sauté beef mince.', 'Steam veg.', 'Mix and serve.']
  },
  'Chicken Breast & Couscous with Peppers': {
    kcals: 580, protein: 50,
    ingredients: ['1 Chicken Breast', '80g Couscous', '1 Bell Pepper'],
    steps: ['Pan-fry chicken.', 'Soak couscous in stock.', 'Sauté peppers.', 'Combine all.']
  },
  // Adding variety for the 4-week cycle
  'Turkey Burgers & Potatoes with Mixed Veg': {
    kcals: 620, protein: 40,
    ingredients: ['2 Turkey Burgers (or 180g mince shaped)', '2 Large Potatoes', '1 Cup Mixed Veg'],
    steps: ['Cut potatoes into wedges and roast (30 mins).', 'Pan-fry or grill turkey burgers.', 'Steam veg.', 'Serve together.']
  },
  'Boiled Eggs & Quinoa with Spinach': {
    kcals: 530, protein: 30,
    ingredients: ['3 Eggs', '75g Quinoa', '2 Handfuls Spinach', 'Olive Oil'],
    steps: ['Boil eggs for 8 mins, then peel.', 'Cook quinoa (15 mins).', 'Wilt spinach with oil.', 'Serve eggs sliced over quinoa/spinach.']
  },
  'Tuna & Sweet Potato Mash with Broccoli': {
    kcals: 540, protein: 35,
    ingredients: ['1 Canned Tuna', '2 Small Sweet Potatoes', '1 Cup Broccoli'],
    steps: ['Boil and mash sweet potatoes.', 'Mix drained tuna into the mash.', 'Steam broccoli and serve on the side.']
  }
};

const PROTEIN_HACKS = [
  { min: 60, item: "Homemade Mass Gainer (Oats, Peanut Butter, Whey, Milk)", prot: 55, kcal: 800, desc: "Critical Deficit: You need liquid calories to hit targets on 2 meals." },
  { min: 40, item: "Double Whey Shake + Banana", prot: 50, kcal: 350, desc: "Large Deficit: Quick protein spike required." },
  { min: 25, item: "Whey Protein Shake", prot: 25, kcal: 120, desc: "Standard Deficit: Easy fix." },
  { min: 20, item: "250g Greek Yogurt", prot: 25, kcal: 150, desc: "Solid Food Fix: High protein density." },
  { min: 10, item: "3 Large Boiled Eggs", prot: 18, kcal: 210, desc: "Snack Fix: Quick prep." }
];

const BREAKFAST_BOOK = {
  'Oats, Greek Yogurt, Berries & Peanut Butter': {
    kcals: 600, protein: 40,
    ingredients: ['80g Oats', '150g Greek Yogurt', 'Handful Berries', '1 tbsp Peanut Butter', 'Scoop Whey Protein (Optional)'],
    steps: ['Boil oats with water/milk or soak overnight.', 'Top with Greek yogurt and fresh/frozen berries.', 'Swirl in peanut butter.', 'Mix in protein powder if using for extra gains.']
  },
  'Scrambled Eggs on Wholewheat Toast': {
    kcals: 550, protein: 30,
    ingredients: ['3 Eggs', '2 Slices Wholewheat Bread', 'Butter/Oil', 'Salt/Pepper'],
    steps: ['Whisk eggs in a bowl with seasoning.', 'Heat pan with a little butter.', 'Cook eggs over medium heat, stirring gently until set.', 'Toast bread and serve eggs on top.']
  },
  'Greek Yogurt with Mixed Nuts & Honey': {
    kcals: 450, protein: 25,
    ingredients: ['250g Greek Yogurt', '30g Mixed Nuts', '1 tsp Honey', 'Cinnamon'],
    steps: ['Place yogurt in a bowl.', 'Top with raw mixed nuts.', 'Drizzle with honey and sprinkle cinnamon.']
  },
  'Protein Omelette with Spinach & Peppers': {
    kcals: 400, protein: 35,
    ingredients: ['3 Eggs', 'Handful Spinach', 'Half Bell Pepper', 'Seasoning'],
    steps: ['Dice peppers and sauté in a pan.', 'Whisk eggs and pour over peppers.', 'Add spinach and fold omelette once base is set.', 'Cook until firm.']
  },
  'Cottage Cheese & Sliced Apple with Nuts': {
    kcals: 350, protein: 30,
    ingredients: ['200g Cottage Cheese', '1 Apple', 'Handful Walnuts/Almonds'],
    steps: ['Slice apple into wedges.', 'Serve cottage cheese in a bowl.', 'Top with apple slices and crushed nuts.']
  }
};

const WEEKLY_PLANS = [
  { // Week 1
    0: { lunch: 'Lunch: Baked Salmon & Sweet Potato with Asparagus', dinner: 'Dinner: Beef Mince & Pasta with Mixed Veg' },
    1: { lunch: 'Lunch: Chicken Breast & Brown Rice with Broccoli', dinner: 'Dinner: Turkey Mince & Couscous with Peppers' },
    2: { lunch: 'Lunch: Canned Tuna & Pasta Salad with Sweetcorn', dinner: 'Dinner: Salmon Fillet & Quinoa with Mixed Veg' },
    3: { lunch: 'Lunch: Beef Mince & Brown Rice with Spinach', dinner: 'Dinner: Turkey Mince & Pasta with Mixed Veg' },
    4: { lunch: 'Lunch: Chicken Breast & Sweet Potato with Mixed Veg', dinner: 'Dinner: Canned Tuna & Brown Rice with Spinach' },
    5: { lunch: 'Lunch: Turkey Mince & Pasta with Peppers', dinner: 'Dinner: Baked Salmon & Brown Rice with Broccoli' },
    6: { lunch: 'Lunch: Beef Mince & Sweet Potato with Mixed Veg', dinner: 'Dinner: Chicken Breast & Couscous with Peppers' }
  },
  { // Week 2
    0: { lunch: 'Lunch: Turkey Burgers & Potatoes with Mixed Veg', dinner: 'Dinner: Salmon Fillet & Quinoa with Mixed Veg' },
    1: { lunch: 'Lunch: Canned Tuna & Brown Rice with Spinach', dinner: 'Dinner: Chicken Breast & Sweet Potato with Mixed Veg' },
    2: { lunch: 'Lunch: Beef Mince & Pasta with Mixed Veg', dinner: 'Dinner: Turkey Mince & Couscous with Peppers' },
    3: { lunch: 'Lunch: Chicken Breast & Brown Rice with Broccoli', dinner: 'Dinner: Baked Salmon & Sweet Potato with Asparagus' },
    4: { lunch: 'Lunch: Salmon Fillet & Quinoa with Mixed Veg', dinner: 'Dinner: Beef Mince & Brown Rice with Spinach' },
    5: { lunch: 'Lunch: Turkey Mince & Pasta with Peppers', dinner: 'Dinner: Boiled Eggs & Quinoa with Spinach' },
    6: { lunch: 'Lunch: Tuna & Sweet Potato Mash with Broccoli', dinner: 'Dinner: Chicken Breast & Couscous with Peppers' }
  },
  { // Week 3
    0: { lunch: 'Lunch: Chicken Breast & Brown Rice with Broccoli', dinner: 'Dinner: Turkey Mince & Pasta with Mixed Veg' },
    1: { lunch: 'Lunch: Baked Salmon & Sweet Potato with Asparagus', dinner: 'Dinner: Beef Mince & Brown Rice with Spinach' },
    2: { lunch: 'Lunch: Turkey Burgers & Potatoes with Mixed Veg', dinner: 'Dinner: Chicken Breast & Couscous with Peppers' },
    3: { lunch: 'Lunch: Canned Tuna & Pasta Salad with Sweetcorn', dinner: 'Dinner: Salmon Fillet & Quinoa with Mixed Veg' },
    4: { lunch: 'Lunch: Beef Mince & Pasta with Mixed Veg', dinner: 'Dinner: Turkey Mince & Couscous with Peppers' },
    5: { lunch: 'Lunch: Chicken Breast & Sweet Potato with Mixed Veg', dinner: 'Dinner: Boiled Eggs & Quinoa with Spinach' },
    6: { lunch: 'Lunch: Salmon Fillet & Quinoa with Mixed Veg', dinner: 'Dinner: Tuna & Sweet Potato Mash with Broccoli' }
  },
  { // Week 4
    0: { lunch: 'Lunch: Beef Mince & Brown Rice with Spinach', dinner: 'Dinner: Chicken Breast & Sweet Potato with Mixed Veg' },
    1: { lunch: 'Lunch: Turkey Mince & Couscous with Peppers', dinner: 'Dinner: Baked Salmon & Brown Rice with Broccoli' },
    2: { lunch: 'Lunch: Salmon Fillet & Quinoa with Mixed Veg', dinner: 'Dinner: Beef Mince & Sweet Potato with Mixed Veg' },
    3: { lunch: 'Lunch: Boiled Eggs & Quinoa with Spinach', dinner: 'Dinner: Turkey Mince & Pasta with Peppers' },
    4: { lunch: 'Lunch: Chicken Breast & Brown Rice with Broccoli', dinner: 'Dinner: Canned Tuna & Pasta Salad with Sweetcorn' },
    5: { lunch: 'Lunch: Beef Mince & Pasta with Mixed Veg', dinner: 'Dinner: Turkey Burgers & Potatoes with Mixed Veg' },
    6: { lunch: 'Lunch: Baked Salmon & Sweet Potato with Asparagus', dinner: 'Dinner: Chicken Breast & Couscous with Peppers' }
  }
];

// Helper to get week index (0-3) based on date
function getWeekIndex(dateStr) {
  const date = new Date(dateStr);
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
  const weekNum = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
  return (weekNum % WEEKLY_PLANS.length);
}

const ALDI_BULK_LIST = [
  { item: 'Chicken Breast (Large Pack)', category: 'Protein', protein: 'High' },
  { item: 'Turkey Mince (500g)', category: 'Protein', protein: 'High' },
  { item: 'Beef Mince (5% fat - 750g)', category: 'Protein', protein: 'High' },
  { item: 'Salmon Fillets (Fresh or Frozen)', category: 'Protein', protein: 'High' },
  { item: 'Eggs (15 Pack)', category: 'Protein', protein: 'High' },
  { item: 'Greek Yogurt (500g Full Fat)', category: 'Protein', protein: 'High' },
  { item: 'Whey Protein (Optional)', category: 'Protein', protein: 'High' },
  { item: 'Whole Milk (4 Pints)', category: 'Protein', protein: 'Med' },
  { item: 'Peanut Butter (1kg)', category: 'Fats/Protein', protein: 'Med' },
  { item: 'Oats (1kg Bulk)', category: 'Carbs', protein: 'Low' },
  { item: 'Wholewheat Bread (Loaf)', category: 'Carbs', protein: 'Low' },
  { item: 'Brown Rice / Wholewheat Pasta', category: 'Carbs', protein: 'Low' },
  { item: 'Sweet Potatoes (1.5kg)', category: 'Carbs', protein: 'Low' },
  { item: 'Couscous / Quinoa (Bulk)', category: 'Carbs', protein: 'Low' },
  { item: 'Potatoes (2.5kg)', category: 'Carbs', protein: 'Low' },
  { item: 'Apples / Berries (Frozen)', category: 'Health', protein: 'Low' },
  { item: 'Mixed Nuts (Bulk)', category: 'Fats', protein: 'Med' },
  { item: 'Olive Oil / Butter', category: 'Fats', protein: 'None' },
  { item: 'Frozen Mixed Veg', category: 'Health', protein: 'Low' },
  { item: 'Fresh Broccoli & Asparagus', category: 'Health', protein: 'Low' },
  { item: 'Bagged Spinach', category: 'Health', protein: 'Low' },
  { item: 'Bell Peppers', category: 'Health', protein: 'Low' }
];

const SCHEDULE_CONFIG = {
  daily_am: [
    { id: 'am-wakeup', text: 'Wakeup: 6:30 AM (Natural light or bright lamp)', time: '0 min' },
    { id: 'am-shower', text: 'Shower: Full body cleanse & refresh', time: '10 min' },
    { id: 'am-contacts-prep', text: 'Get ready: Choose outfit & dress', time: '5 min' },
    { id: 'am-contacts', text: 'Contacts: Put in contact lenses', time: '2 min' },
    { id: 'am-cleanse', text: 'Cleanse: Hydrating cleanser (face + neck)', time: '5 min' },
    { id: 'am-moisturize', text: 'Moisturize & SPF 30+: Face, neck, and hands', time: '5 min' },
    { id: 'am-lip-care', text: 'Lip Care: Apply Vaseline/SPF balm', time: '1 min' },
    { id: 'am-hair', text: 'Hair: Sea salt spray, Anti-frizz & Style with Matte clay/paste', time: '5 min' },
    { id: 'am-shave', text: 'Shave: Trim stubble to maintain 3-5mm look', time: '5 min', frequency: 2, hidden: true },
    { id: 'am-dental', text: 'Dental: Tongue scrape, Brush & Mouthwash', time: '4 min' }
  ],
  daily_pm: [
    { id: 'pm-bed-prep', text: 'Get ready for bed: Dim lights & set environment', time: '2 min' },
    { id: 'pm-cleanse', text: 'Cleanse: Gentle hydrating cleanser', time: '5 min' },
    { id: 'pm-moisturize', text: 'Moisturize: Apply regular moisturizer', time: '3 min' },
    { id: 'pm-lip-care', text: 'Lip Care: Thick layer of Vaseline', time: '1 min' },
    { id: 'pm-dental', text: 'Dental: Brush, Floss & Mouthwash', time: '4 min' },
    { id: 'pm-mouth-tape', text: 'Sleep: Apply Mouth Tape', time: '1 min' },
    { id: 'pm-contacts', text: 'Contacts: Take out contact lenses', time: '2 min' },
    { id: 'pm-wind-down', text: 'Wind Down: 10:30 PM (No screens/bright lights)', time: '30 min' },
    { id: 'pm-sleep', text: 'Sleep: 11:00 PM Target (7.5 Hours)', time: '0 min' }
  ],
  boosters: {
    gym: {
      days: [1, 3, 5], // Mon, Wed, Fri
      tasks: [
        { id: 'gym-workout', text: 'Gym: Upper Body Strength & Core', type: 'fitness' }
      ]
    },
    pullup: {
      days: [1, 2, 3, 4, 5, 6], // Almost every day
      chip: 'Pullup',
      tasks: [
        { id: 'home-pullups', text: 'Pullup Bar: Wide/Narrow grip & Leg raises', type: 'overload', simple: true, bodyweight: true },
        { id: 'home-obliques', text: 'Obliques: Windshield wipers/Side raises', type: 'overload', simple: true, bodyweight: true }
      ]
    },
    tan_prep: {
      days: [6], // Saturday (Prep)
      chip: 'Prep',
      tasks: [
        { id: 'tan-groom', text: 'Grooming: Shave & groom (Chest/Arms/Groin)', type: 'grooming' },
        { id: 'tan-exfoliate-body', text: 'Exfoliate body day before tan', type: 'tan' }
      ]
    },
    tan_apply: {
      days: [0], // Sunday (Application)
      tasks: [
        { id: 'tan-pre-moisturize', text: 'Tan Prep: Moisturize knees, elbows, ankles', type: 'tan' },
        { id: 'tan-apply-now', text: 'Apply Fake Tan: 4-6 hours (Circular application)', type: 'tan' },
        { id: 'tan-wash-hands', text: 'CRITICAL: Wash hands post-tan!', type: 'tan' }
      ]
    },
    skincare_weekly: {
      days: [6], // Saturday
      tasks: [
        { id: 'skincare-mask', text: 'Face/Body Mask treatment (Clay or Hydrating)', type: 'skincare' }
      ]
    },
    grooming_weekly: {
      days: [0], // Sunday
      tasks: [
        { id: 'grooming-brows', text: 'Brows: Trim stray hairs/clean underside', type: 'grooming' },
        { id: 'grooming-beard', text: 'Stubble: Trim 3-5mm & clean neckline', type: 'grooming' },
        { id: 'grooming-teeth', text: 'Teeth: Whitening treatment (1x week)', type: 'health' }
      ]
    },
    hair_weekly: {
      days: [0, 3], // Sun, Wed (2x week)
      tasks: [
        { id: 'hair-mask', text: 'Hair: Deep conditioning/Hair mask', type: 'hair' }
      ]
    },
    reset: {
      days: [6], // Sat
      chip: 'Shop',
      tasks: [
        { id: 'weekly-nails', text: 'Nail Care & Trim', type: 'grooming' },
        { id: 'weekly-shop', text: '🛒 Weekly Shop: Aldi Bulk High-Protein List', type: 'health', action: 'showShoppingList()' }
      ]
    }
  },
  daily_meals: [
    { id: 'meal-1', text: 'Meal 1 (High Calorie/Protein)', type: 'meal' },
    { id: 'meal-2', text: 'Meal 2 (High Calorie/Protein)', type: 'meal' },
    { id: 'meal-bulk-shake', text: 'Bulking Shake: Liquid Calories for Mass', type: 'meal' }
  ],
  daily_day: [
    { id: 'day-uni', text: 'Attend Uni: Lectures, Seminars & Study', time: '4-6 hours', type: 'study' },
    { id: 'day-hydration', text: 'Hydration: Goal 2-3L (Continuous intake)', time: '8 glasses total', type: 'hydration' },
    { id: 'grooming-haircut', text: '💇 Haircut: Time for your 3-week trim!', time: '45 min', type: 'hair', frequency: 3, hidden: true }
  ]
};

// Add chips to other boosters
SCHEDULE_CONFIG.boosters.gym.chip = 'Gym';
SCHEDULE_CONFIG.boosters.tan_apply.chip = 'Tan';
SCHEDULE_CONFIG.boosters.skincare_weekly.chip = 'Exfoliate';
SCHEDULE_CONFIG.boosters.grooming_weekly.chip = 'Groom';
SCHEDULE_CONFIG.boosters.hair_weekly.chip = 'Hair Mask';

// Mark gym workout as overload
SCHEDULE_CONFIG.boosters.gym.tasks[0].type = 'overload';

let state = {
  completed: {},
  overloadData: {},
  pushedTasks: {},
  shuffledMeals: {},
  strikes: {},
  shoppingStrikes: {},
  hydrationCount: {},
  streak: 0,
  lastDate: null,
  viewedDate: new Date().toISOString().split('T')[0],
  deadlines: [
    { id: 'd1', title: 'Trashformers Essay', date: '2025-01-13' },
    { id: 'd2', title: 'Morocco Fund Deadline', date: '2025-01-17' },
    { id: 'd3', title: 'MCQ Exam', date: '2025-01-21' },
    { id: 'd4', title: 'Turing Scheme Opens', date: '2025-01-30' },
    { id: 'd5', title: 'Mint Warehouse Event', date: '2025-03-07' },
    { id: 'd6', title: 'Mint Fest Event', date: '2025-05-02' },
    { id: 'd7', title: 'Beyond the Woods Event', date: '2025-05-30' }
  ],
  weightLog: {},
  productStartDates: {
    'Razor Head': '2024-12-31',
    'Toothbrush': '2024-12-31'
  },
  showPassedDeadlines: false,
  macroHistory: {}, // { dateKey: { kcal, protein } }
  inventoryState: {}, // { itemName: 'in-stock' | 'out' }
  customShopItems: [], // [ { item, category } ]
  profile: {
    height: 188, // 6'2" in cm
    startWeight: 62,
    targetWeight: 75,
    gender: 'male',
    age: 20,
    birthday: '10-27' // October 27th
  },
  focusScore: {}, // { dateKey: score }
  tonnageHistory: {} // { dateKey: totalWeight }
};

// --- ELITE HELPERS ---
function getDayPlan(dateStr) {
  const d = new Date(dateStr);
  const dayOfWeek = d.getDay();
  const weekIdx = getWeekIndex(dateStr);
  const weekPlan = WEEKLY_PLANS[weekIdx] || WEEKLY_PLANS[0];

  const breakfast = state.shuffledMeals[`${dateStr}:meal-breakfast`] || "Breakfast: Oats, Greek Yogurt, Berries & Peanut Butter";
  const lunch = state.shuffledMeals[`${dateStr}:meal-lunch`] || weekPlan[dayOfWeek].lunch;
  const dinner = state.shuffledMeals[`${dateStr}:meal-dinner`] || weekPlan[dayOfWeek].dinner;

  return { breakfast, lunch, dinner };
}

function init() {
  loadState();
  // Ensure viewedDate is today on fresh load
  state.viewedDate = new Date().toISOString().split('T')[0];
  renderWeeklyPlanner();
  renderTimeline();
  renderDeadlines();
  updateStats();

  // Auto-refresh daily
  setInterval(() => {
    const todayStr = new Date().toDateString();
    if (todayStr !== state.lastDate) {
      state.lastDate = todayStr;
      // Only force today if we were already looking at today
      if (state.viewedDate === new Date().toISOString().split('T')[0]) {
        state.viewedDate = new Date().toISOString().split('T')[0];
      }
      renderWeeklyPlanner();
      renderTimeline();
    }
  }, 60000);
}

function loadState() {
  const saved = localStorage.getItem('self_improvement_v2');
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...state, ...parsed };
    // Ensure new collections exist even if old save didn't have them
    if (!state.pushedTasks) state.pushedTasks = {};
    if (!state.overloadData) state.overloadData = {};
    if (!state.shuffledMeals) state.shuffledMeals = {};
    if (!state.strikes) state.strikes = {};
    if (!state.shoppingStrikes) state.shoppingStrikes = {};
    if (!state.hydrationCount) state.hydrationCount = {};
    if (!state.deadlines) state.deadlines = [
      { id: 'd1', title: 'Trashformers Essay', date: '2025-01-13' },
      { id: 'd2', title: 'Morocco Fund Deadline', date: '2025-01-17' },
      { id: 'd3', title: 'MCQ Exam', date: '2025-01-21' },
      { id: 'd4', title: 'Turing Scheme Opens', date: '2025-01-30' },
      { id: 'd5', title: 'Mint Warehouse Event', date: '2025-03-07' },
      { id: 'd6', title: 'Mint Fest Event', date: '2025-05-02' },
      { id: 'd7', title: 'Beyond the Woods Event', date: '2025-05-30' }
    ];
    if (!state.weightLog) state.weightLog = {};
    if (!state.productStartDates) state.productStartDates = { 'Razor Head': '2024-12-31', 'Toothbrush': '2024-12-31' };
    if (!state.acknowledgedReplacements) state.acknowledgedReplacements = {};
    if (!state.macroHistory) state.macroHistory = {};
    if (!state.inventoryState) state.inventoryState = {};
    if (!state.customShopItems) state.customShopItems = [];
  }
}

function saveState() {
  localStorage.setItem('self_improvement_v2', JSON.stringify(state));
}

function getTodayKey() {
  return new Date().toISOString().split('T')[0];
}

function getViewedKey() {
  return state.viewedDate;
}

function renderTimeline() {
  const d = new Date(state.viewedDate);
  const dayOfWeek = d.getDay();
  const container = document.getElementById('timeline-container');
  const viewedKey = getViewedKey();
  const todayKey = getTodayKey();
  state.lastDate = new Date().toDateString();

  // Update the displayed date in header
  const dateHero = document.getElementById('today-date');
  if (dateHero) {
    const displayDate = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
    dateHero.textContent = viewedKey === todayKey ? `Today: ${displayDate}` : displayDate;
  }

  // Refresh planner to update selection
  renderWeeklyPlanner();

  let html = '';

  // Nutrition Section (Dynamic)
  const weekIdx = getWeekIndex(viewedKey);
  const weekPlan = WEEKLY_PLANS[weekIdx] || WEEKLY_PLANS[0];
  const meals = JSON.parse(JSON.stringify(SCHEDULE_CONFIG.daily_meals));

  // Applied Shuffled Overrides
  const mealMapping = { 'meal-1': 'meal-breakfast', 'meal-2': 'meal-lunch', 'meal-bulk-shake': 'meal-dinner' };

  meals.forEach(m => {
    const shuffleId = mealMapping[m.id];
    const shuffleKey = `${viewedKey}:${shuffleId}`;

    if (state.shuffledMeals[shuffleKey]) {
      const parts = state.shuffledMeals[shuffleKey].split(': ');
      m.text = parts.length > 1 ? `<b>${parts[0]}:</b> ${parts[1]}` : state.shuffledMeals[shuffleKey];
    } else if (shuffleId === 'meal-lunch') {
      m.text = `<b>Lunch:</b> ${weekPlan[dayOfWeek].lunch.replace('Lunch: ', '')}`;
    } else if (shuffleId === 'meal-dinner') {
      m.text = `<b>Dinner:</b> ${weekPlan[dayOfWeek].dinner.replace('Dinner: ', '')}`;
    } else if (shuffleId === 'meal-breakfast') {
      m.text = "<b>Breakfast:</b> Oats, Greek Yogurt, Berries & Peanut Butter";
    }
  });

  // Add recipe action to meals
  meals.forEach(m => {
    const mealTitle = m.text.replace(/^(<b>Breakfast:<\/b>|<b>Lunch:<\/b>|<b>Dinner:<\/b>)\s*/, '');
    const isBreakfast = m.id === 'meal-breakfast';
    const targetBook = isBreakfast ? BREAKFAST_BOOK : RECIPE_BOOK;

    if (targetBook[mealTitle]) {
      m.action = `showRecipe('${mealTitle.replace(/'/g, "\\'")}', ${isBreakfast})`;
    }
  });

  // Render Breakfast & Lunch
  // Render AM Routine (Filtered for alternate days)
  const amTasks = SCHEDULE_CONFIG.daily_am.filter(t => {
    if (t.id === 'am-shave') {
      const date = new Date(viewedKey);
      const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
      return dayOfYear % 2 === 0; // Show on even days of the year
    }
    return true;
  });
  html += renderSection('Morning Routine', amTasks, 'morning');
  html += renderSection('Breakfast', [meals[0]], 'meals');

  // Daytime / Uni (Dynamic for Haircut/Weekends)
  const dayTasks = SCHEDULE_CONFIG.daily_day.filter(t => {
    if (t.id === 'day-uni') {
      return dayOfWeek >= 1 && dayOfWeek <= 5; // Mon-Fri only
    }
    if (t.id === 'grooming-haircut') {
      const date = new Date(viewedKey);
      const oneJan = new Date(date.getFullYear(), 0, 1);
      const weekNum = Math.ceil((date.getDay() + 1 + Math.floor((date - oneJan) / (24 * 60 * 60 * 1000))) / 7);
      return dayOfWeek === 0 && (weekNum % 3 === 0);
    }
    return true;
  });

  html += renderSection('Daytime', dayTasks, 'day');

  html += renderSection('Lunch', [meals[1]], 'meals');

  // Day Boosters (Gym/Tan/etc)
  const activeBoosters = [];
  Object.keys(SCHEDULE_CONFIG.boosters).forEach(key => {
    const booster = SCHEDULE_CONFIG.boosters[key];
    if (booster.days.includes(dayOfWeek)) {
      activeBoosters.push(...booster.tasks);
    }
  });

  // Pushed Tasks
  const pushed = state.pushedTasks[viewedKey] || [];
  if (pushed.length > 0) {
    html += renderSection('Deferred Tasks', pushed, 'boosters deferred');
  }

  if (activeBoosters.length > 0) {
    html += renderSection('Active Today (Boosters)', activeBoosters, 'boosters');
  }

  // Dinner & Evening
  html += renderSection('Dinner', [meals[2]], 'meals');
  html += renderSection('Evening Routine', SCHEDULE_CONFIG.daily_pm, 'evening');

  container.innerHTML = html;
}

function renderSection(title, tasks, type) {
  const viewedKey = getViewedKey();
  let sectionHtml = `
        <div class="timeline-section ${type}">
            <h3>${title}</h3>
            <div class="task-list">
    `;

  tasks.forEach(task => {
    const fullId = `${viewedKey}:${task.id}`;
    const isDone = state.completed[fullId] || false;
    const isStruck = state.strikes[fullId] || false;
    const isOverload = task.type === 'overload';
    const overloadInfo = state.overloadData[task.id] || null;
    const isHydration = task.id === 'day-hydration';
    const isStudy = task.id === 'day-uni';

    let hydrationHtml = '';
    if (isHydration) {
      const count = state.hydrationCount[viewedKey] || 0;
      hydrationHtml = `
                    <div class="hydration-control" onclick="event.stopPropagation()">
                        <div class="glass-grid">
                            ${Array(8).fill(0).map((_, i) => `<span class="glass ${i < count ? 'filled' : ''}" onclick="addHydration(${i + 1})">💧</span>`).join('')}
                        </div>
                        <span class="count-label">${count}/8 Glasses</span>
                    </div>
                `;
    }

    let studyHtml = '';
    if (isStudy) {
      studyHtml = `<button class="timer-btn" onclick="event.stopPropagation(); openTimer()">⏱️ Start Focus Session</button>`;
    }

    sectionHtml += `
      <div class="task-card ${isDone ? 'done' : ''} ${isStruck ? 'struck' : ''} ${isOverload ? 'overload-card' : ''} ${isHydration ? 'hydration-card' : ''}" 
           onclick="toggleTask('${task.id}')"
           ondblclick="event.stopPropagation(); toggleStrike('${task.id}')">
          <div class="checkbox"></div>
          <div class="task-info">
              <div class="task-text">
                  ${task.text}
                  <div class="task-actions-inline">
                    ${task.type === 'meal' ? `<button class="shuffle-btn" onclick="event.stopPropagation(); shuffleMeal('${task.id}')" title="Shuffle Meal (Inventory Aware)">🎲</button>` : ''}
                    ${task.action ? `<button class="recipe-link-btn" onclick="event.stopPropagation(); ${task.action}">📖 View Recipe</button>` : ''}
                  </div>
              </div>
              ${task.time ? `<div class="task-subtext">${task.time}</div>` : ''}
              ${hydrationHtml}
              ${studyHtml}
              ${isOverload && overloadInfo ? `
                  <div class="overload-prev-list">
                      ${overloadInfo.last.exercises.map(ex => `
                          <div class="prev-ex-item">
                              <span>${ex.name || ''}</span>
                              <span>${ex.sets}x${ex.reps}${task.bodyweight ? '' : ` @ ${ex.weight}kg`}</span>
                          </div>
                      `).join('')}
                  </div>
              ` : ''}
          </div>
          ${!isDone && type.includes('boosters') ? `<button class="push-btn" onclick="event.stopPropagation(); pushTaskBack('${task.id}', '${viewedKey}')" title="Push to tomorrow">⏭️</button>` : ''}
      </div>
            ${isOverload && !isDone ? `
                <div class="overload-inputs" id="overload-container-${task.id}" onclick="event.stopPropagation()">
                    <div class="exercise-list" id="exercise-list-${task.id}">
                        ${(state.overloadData[task.id]?.draft || [{ name: '', sets: '', reps: '', weight: '' }]).map((ex, idx) => `
                            <div class="exercise-row ${task.simple ? 'simple-row' : ''}">
                                ${!task.simple ? `<input type="text" class="ex-name" value="${ex.name || ''}" placeholder="Exercise Name" oninput="updateOverloadDraft('${task.id}', ${idx}, 'name', this.value)">` : ''}
                                <input type="number" class="ex-sets" value="${ex.sets || ''}" placeholder="Sets" oninput="updateOverloadDraft('${task.id}', ${idx}, 'sets', this.value)">
                                <input type="number" class="ex-reps" value="${ex.reps || ''}" placeholder="Reps" oninput="updateOverloadDraft('${task.id}', ${idx}, 'reps', this.value)">
                                ${!task.bodyweight ? `<input type="number" class="ex-weight" value="${ex.weight || ''}" placeholder="kg" oninput="updateOverloadDraft('${task.id}', ${idx}, 'weight', this.value)">` : ''}
                                ${!task.simple ? `<button class="remove-ex-btn" onclick="removeExerciseRow('${task.id}', ${idx})">×</button>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    <div class="overload-controls">
                        ${!task.simple ? `<button class="add-ex-btn" onclick="addExerciseRow('${task.id}')">+ Add Exercise</button>` : ''}
                    </div>
                </div>
            ` : ''}
        `;
  });

  sectionHtml += `</div>`;

  if (type === 'am' && title.includes('Morning')) {
    const weight = state.weightLog[viewedKey] || '';
    sectionHtml += `
        <div class="weight-entry-card" onclick="event.stopPropagation()">
            <span class="weight-label">⚖️ Morning Weight</span>
            <div class="weight-input-wrap">
                <input type="number" step="0.1" value="${weight}" placeholder="--" oninput="saveWeight(this.value)">
                <span class="weight-unit">kg</span>
            </div>
        </div>
      `;
  }

  sectionHtml += `</div>`;
  return sectionHtml;
}

function renderWeeklyPlanner() {
  const container = document.getElementById('weekly-planner-container');
  if (!container) return;

  let html = '';
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const viewed = new Date(state.viewedDate);
  const todayKey = getTodayKey();

  // Calculate the Monday of the viewed week
  const startOfWeek = new Date(viewed);
  const day = startOfWeek.getDay();
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  startOfWeek.setDate(diff);

  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    const dayIdx = date.getDay();
    const dateKey = date.toISOString().split('T')[0];
    const isToday = dateKey === todayKey;
    const isSelected = dateKey === state.viewedDate;

    // Find boosters for this day
    const dayBoosters = [];
    Object.keys(SCHEDULE_CONFIG.boosters).forEach(key => {
      const b = SCHEDULE_CONFIG.boosters[key];
      if (b.days.includes(dayIdx) && b.chip) {
        dayBoosters.push(b.chip);
      }
    });

    // Add periodic haircut chip
    if (dayIdx === 0) {
      const oneJan = new Date(date.getFullYear(), 0, 1);
      const weekNumForDate = Math.ceil((dayIdx + 1 + Math.floor((date - oneJan) / (24 * 60 * 60 * 1000))) / 7);
      if (weekNumForDate % 3 === 0) dayBoosters.push('Haircut');
    }

    html += `
            <div class="planner-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}" onclick="selectDate('${dateKey}')">
                <span class="day-label">${days[dayIdx]}</span>
                <span class="day-number">${date.getDate()}</span>
                <div class="day-events">
                    ${dayBoosters.map(b => `<span class="event-chip ${b.toLowerCase().replace(/\s+/g, '-')}">${b}</span>`).join('')}
                    ${dayBoosters.length === 0 ? '<span class="event-none">•</span>' : ''}
                </div>
            </div>
        `;
  }
  container.innerHTML = html;

  // Show/hide Today button
  const todayBtn = document.getElementById('jump-today');
  if (todayBtn) {
    todayBtn.style.display = state.viewedDate === todayKey ? 'none' : 'block';
  }
}

window.selectDate = function (dateKey) {
  state.viewedDate = dateKey;
  saveState();
  renderTimeline();
  renderWeeklyPlanner();
  updateStats();
};

window.renderDeadlines = function () {
  const list = document.getElementById('deadline-list');
  if (!list) return;

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const displayDeadlines = [...state.deadlines];

  // Elite Birthday Logic: Show if within 60 days or if no other soon deadlines
  const currentYear = now.getFullYear();
  let bdayDate = new Date(`${currentYear}-${state.profile.birthday}`);
  if (bdayDate < now) bdayDate = new Date(`${currentYear + 1}-${state.profile.birthday}`);

  const bdayDiff = Math.ceil((bdayDate - now) / (1000 * 60 * 60 * 24));
  const hasSoonDeadlines = state.deadlines.some(d => {
    const diff = Math.ceil((new Date(d.date) - now) / (1000 * 60 * 60 * 24));
    return diff >= 0 && diff <= 14;
  });

  if (bdayDiff <= 60 || !hasSoonDeadlines) {
    displayDeadlines.push({
      id: 'birthday-recurring',
      title: 'My Birthday 🎂',
      date: bdayDate.toISOString().split('T')[0]
    });
  }

  // Sort deadlines by date
  const sorted = displayDeadlines.sort((a, b) => new Date(a.date) - new Date(b.date));

  let html = '';
  sorted.forEach(d => {
    const dDate = new Date(d.date);
    const diffDays = Math.ceil((dDate - now) / (1000 * 60 * 60 * 24));
    const isPassed = diffDays < 0;

    // Filter passed events
    if (isPassed && !state.showPassedDeadlines) return;

    let urgency = '';
    if (isPassed) urgency = 'passed';
    else if (diffDays <= 2) urgency = 'urgent';
    else if (diffDays <= 7) urgency = 'soon';

    let timeLeft = '';
    if (isPassed) timeLeft = 'Passed';
    else if (diffDays === 0) timeLeft = 'DUE TODAY 🚨';
    else if (diffDays === 1) timeLeft = 'Tomorrow';
    else timeLeft = `${diffDays} days left`;

    html += `
            <div class="deadline-card ${urgency}">
                <span class="title">${d.title}</span>
                <span class="time-left">${timeLeft} (${d.date.split('-').reverse().slice(0, 2).join('/')})</span>
            </div>
        `;
  });

  list.innerHTML = html || '<div class="deadline-card" style="border:none; opacity:0.5; text-align:center">No upcoming events 🧘</div>';

  const toggle = document.getElementById('deadline-passed-toggle');
  if (toggle) {
    // Hide toggle if there are no passed tasks to show
    const hasPassed = state.deadlines.some(d => new Date(d.date) < now);
    toggle.style.display = hasPassed ? 'block' : 'none';
    toggle.innerText = state.showPassedDeadlines ? 'Hide Passed Events' : 'Show Passed Events';
  }
};

window.togglePassedDeadlines = function () {
  state.showPassedDeadlines = !state.showPassedDeadlines;
  saveState();
  renderDeadlines();
};

window.openDeadlineModal = function () {
  const modal = document.getElementById('deadline-modal');
  const list = document.getElementById('manage-deadline-list');

  let html = '';
  state.deadlines.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(d => {
    html += `
            <div class="manage-item">
                <div class="info">
                    <span class="name">${d.title}</span>
                    <span class="date">${d.date}</span>
                </div>
                <button class="del-btn" onclick="deleteDeadline('${d.id}')">Delete</button>
            </div>
        `;
  });

  list.innerHTML = html || '<p style="text-align:center; padding:20px; color:var(--text-dim)">No events yet</p>';
  modal.classList.add('active');
};

window.saveNewDeadline = function () {
  const title = document.getElementById('new-deadline-title').value;
  const date = document.getElementById('new-deadline-date').value;

  if (!title || !date) return alert('Enter title and date!');

  state.deadlines.push({
    id: 'd' + Date.now(),
    title,
    date
  });

  saveState();
  renderDeadlines();
  openDeadlineModal(); // refresh list
  document.getElementById('new-deadline-title').value = '';
  document.getElementById('new-deadline-date').value = '';
};

window.deleteDeadline = function (id) {
  state.deadlines = state.deadlines.filter(d => d.id !== id);
  saveState();
  renderDeadlines();
  openDeadlineModal();
};

window.saveWeight = function (val) {
  const viewedKey = getViewedKey();
  if (val === '') delete state.weightLog[viewedKey];
  else state.weightLog[viewedKey] = parseFloat(val);
  saveState();
  updateStats();
};

window.triggerHaptic = function () {
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(25);
  }
};

window.navigateWeek = function (offsetWeeks) {
  const d = new Date(state.viewedDate);
  d.setDate(d.getDate() + (offsetWeeks * 7));
  state.viewedDate = d.toISOString().split('T')[0];
  saveState();
  renderWeeklyPlanner();
  renderTimeline();
  updateStats();
};

window.jumpToToday = function () {
  state.viewedDate = getTodayKey();
  saveState();
  renderWeeklyPlanner();
  renderTimeline();
  updateStats();
};

window.toggleTask = function (taskId) {
  const viewedKey = getViewedKey();
  const fullId = `${viewedKey}:${taskId}`;

  state.completed[fullId] = !state.completed[fullId];

  if (state.completed[fullId]) {
    state.strikes[fullId] = false;
    triggerHaptic();

    // If closing an overload task, archive the draft
    if (SCHEDULE_CONFIG.daily_am.find(t => t.id === taskId)?.type === 'overload' ||
      SCHEDULE_CONFIG.daily_pm.find(t => t.id === taskId)?.type === 'overload' ||
      SCHEDULE_CONFIG.daily_day.find(t => t.id === taskId)?.type === 'overload' ||
      Object.values(SCHEDULE_CONFIG.boosters).some(b => b.tasks.find(t => t.id === taskId && t.type === 'overload'))) {

      if (state.overloadData[taskId]?.draft) {
        const entry = { exercises: state.overloadData[taskId].draft, date: viewedKey };
        state.overloadData[taskId].last = entry;
        state.overloadData[taskId].history.push(entry);
        state.overloadData[taskId].draft = null;
      }
    }
  }

  saveState();
  renderTimeline();
  updateStats();
};

window.toggleStrike = function (taskId) {
  const viewedKey = getViewedKey();
  const fullId = `${viewedKey}:${taskId}`;

  state.strikes[fullId] = !state.strikes[fullId];
  // If task is struck, remove completion
  if (state.strikes[fullId]) state.completed[fullId] = false;

  saveState();
  renderTimeline();
  updateStats();
};

function findTaskById(taskId) {
  // Check daily AM/PM/Day
  let task = SCHEDULE_CONFIG.daily_am.find(t => t.id === taskId) ||
    SCHEDULE_CONFIG.daily_pm.find(t => t.id === taskId) ||
    SCHEDULE_CONFIG.daily_day.find(t => t.id === taskId) ||
    SCHEDULE_CONFIG.daily_meals.find(t => t.id === taskId);

  if (task) return task;

  // Check boosters
  Object.keys(SCHEDULE_CONFIG.boosters).forEach(key => {
    const found = SCHEDULE_CONFIG.boosters[key].tasks.find(t => t.id === taskId);
    if (found) task = found;
  });

  return task;
}

window.pushTaskBack = function (taskId, dateKey) {
  const d = new Date(dateKey);
  d.setDate(d.getDate() + 1);
  const nextDateKey = d.toISOString().split('T')[0];

  let taskObj = findTaskById(taskId);
  if (!taskObj) {
    taskObj = (state.pushedTasks[dateKey] || []).find(t => t.id === taskId);
  }
  if (taskObj) {
    if (!state.pushedTasks[nextDateKey]) state.pushedTasks[nextDateKey] = [];
    state.pushedTasks[nextDateKey].push({ ...taskObj });

    // Mark as completed on current day so it disappears but keep it in pushed tasks for the future
    const fullId = `${dateKey}:${taskId}`;
    state.completed[fullId] = true;

    saveState();
    renderTimeline();
    updateStats();
  }
};

window.addExerciseRow = function (taskId) {
  if (!state.overloadData[taskId]) state.overloadData[taskId] = { last: null, history: [], draft: [] };
  if (!state.overloadData[taskId].draft) state.overloadData[taskId].draft = [];

  state.overloadData[taskId].draft.push({ name: '', sets: '', reps: '', weight: '' });
  saveState();
  renderTimeline();
};

window.removeExerciseRow = function (taskId, index) {
  if (state.overloadData[taskId]?.draft) {
    state.overloadData[taskId].draft.splice(index, 1);
    saveState();
    renderTimeline();
  }
};

window.updateOverloadDraft = function (taskId, index, field, value) {
  if (!state.overloadData[taskId]) state.overloadData[taskId] = { last: null, history: [], draft: [] };
  if (!state.overloadData[taskId].draft) state.overloadData[taskId].draft = [];

  // Ensure the row exists
  while (state.overloadData[taskId].draft.length <= index) {
    state.overloadData[taskId].draft.push({ name: '', sets: '', reps: '', weight: '' });
  }

  state.overloadData[taskId].draft[index][field] = value;
  saveState();
};

// function saveOverload was merged into toggleTask and draft logic

window.showRecipe = function (mealTitle, isBreakfast = false) {
  const targetBook = isBreakfast ? BREAKFAST_BOOK : RECIPE_BOOK;
  const recipe = targetBook[mealTitle];
  if (!recipe) return;

  const modal = document.getElementById('recipe-modal');
  document.getElementById('recipe-title').textContent = mealTitle;

  let html = `
    <div class="recipe-section-title">Ingredients</div>
    <ul class="ingredient-list">
      ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
    </ul>
    <div class="recipe-section-title">Preparation Steps</div>
    <ol class="step-list">
      ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
    </ol>
  `;

  document.getElementById('recipe-content').innerHTML = html;
  modal.classList.add('active');
};

window.showShoppingList = function () {
  const modal = document.getElementById('shop-modal');
  const listContainer = document.getElementById('shop-list-items');
  const viewedKey = getViewedKey();
  const weekIdx = getWeekIndex(viewedKey);
  const weekPlan = WEEKLY_PLANS[weekIdx] || WEEKLY_PLANS[0];

  // Extract ingredients needed for the current week
  const neededIngredients = new Set();
  Object.values(weekPlan).forEach(day => {
    const lunchTitle = day.lunch.replace('Lunch: ', '');
    const dinnerTitle = day.dinner.replace('Dinner: ', '');
    if (RECIPE_BOOK[lunchTitle]) RECIPE_BOOK[lunchTitle].ingredients.forEach(i => neededIngredients.add(i.toLowerCase()));
    if (RECIPE_BOOK[dinnerTitle]) RECIPE_BOOK[dinnerTitle].ingredients.forEach(i => neededIngredients.add(i.toLowerCase()));
  });

  // Include ingredients for all breakfast varieties to ensure they are available
  Object.values(BREAKFAST_BOOK).forEach(recipe => {
    recipe.ingredients.forEach(i => neededIngredients.add(i.toLowerCase()));
  });

  // Group by category for a perfected UI
  const categories = {};
  ALDI_BULK_LIST.forEach(item => {
    const itemNameLower = item.item.toLowerCase();
    const isNeeded = Array.from(neededIngredients).some(ing => {
      // Improved matching: check if either string contains the core part of the other
      const coreIng = ing.split(',')[0].split('(')[0].trim();
      const coreBulk = itemNameLower.split('(')[0].trim();
      return coreIng.includes(coreBulk) || coreBulk.includes(coreIng) ||
        ing.includes(coreBulk) || itemNameLower.includes(coreIng);
    });

    if (isNeeded) {
      if (!categories[item.category]) categories[item.category] = [];
      categories[item.category].push(item);
    }
  });

  // Check Product Lifecycles (Interactive)
  const now = new Date();
  const lifecycles = [
    { name: 'Razor Head', days: 14, category: 'Grooming' },
    { name: 'Toothbrush', days: 90, category: 'Health' }
  ];

  const stockCheckContainer = document.getElementById('stock-check-container');
  let stockHtml = '';
  lifecycles.forEach(prod => {
    const startDate = new Date(state.productStartDates[prod.name] || '2024-12-31');
    const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

    // Only show if due for replacement AND not already answered "Yes" for this shopping session
    if (diffDays >= prod.days && !state.acknowledgedReplacements[prod.name]) {
      stockHtml += `
        <div class="stock-check-item">
          <div class="stock-check-question">Are you out of <b>${prod.name}</b>? (Used ${diffDays}d)</div>
          <div class="stock-check-btns">
            <button class="stock-btn yes" onclick="confirmProductNeed('${prod.name}', true)">Yes, add to list</button>
            <button class="stock-btn no" onclick="confirmProductNeed('${prod.name}', false)">No, I have stock</button>
          </div>
        </div>
      `;
    }

    // If already acknowledged as "Yes", add it to categories
    if (state.acknowledgedReplacements[prod.name]) {
      if (!categories[prod.category]) categories[prod.category] = [];
      categories[prod.category].push({ item: `REPLACE: ${prod.name}`, category: prod.category });
    }
  });
  stockCheckContainer.innerHTML = stockHtml;
  stockCheckContainer.style.display = stockHtml ? 'block' : 'none';

  // Include Custom Items
  state.customShopItems.forEach(item => {
    if (!categories[item.category]) categories[item.category] = [];
    categories[item.category].push({ ...item, custom: true });
  });

  let html = '';
  // Sort categories for consistency
  const sortedCats = Object.keys(categories).sort();
  sortedCats.forEach(cat => {
    html += `<div class="shop-category-title">${cat}</div>`;
    categories[cat].forEach(item => {
      const itemName = typeof item === 'string' ? item : item.item;
      const status = state.inventoryState[itemName] || 'in-stock';
      const isOut = status === 'out';
      html += `
              <div class="shop-item ${isOut ? 'out' : 'in-stock'}" onclick="toggleInventory('${itemName.replace(/'/g, "\\\'")}')">
                  <div style="display:flex; align-items:center; gap:10px">
                    <div class="inventory-dot ${isOut ? 'out' : 'in'}" title="${isOut ? 'Need to buy' : 'In stock'}"></div>
                    <span class="item-name">${itemName}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px">
                    <span class="item-tag">${isOut ? 'OUT 🛒' : 'HAVE ✅'}</span>
                    ${item.custom ? `<button class="del-btn-small" onclick="event.stopPropagation(); removeCustomShopItem('${itemName.replace(/'/g, "\\\'")}')">×</button>` : ''}
                  </div>
              </div>
          `;
    });
  });

  listContainer.innerHTML = html || '<div class="shop-empty">No items needed this week!</div>';

  // Add Copy Button (Only for OUT items)
  const copyBtn = document.createElement('button');
  copyBtn.className = 'save-overload-btn';
  copyBtn.style.marginTop = '20px';
  copyBtn.innerHTML = '📋 Copy "Need" List to Clipboard';
  copyBtn.onclick = copyShoppingList;
  listContainer.appendChild(copyBtn);

  modal.classList.add('active');
};

window.toggleInventory = function (itemName) {
  triggerHaptic();
  state.inventoryState[itemName] = state.inventoryState[itemName] === 'out' ? 'in-stock' : 'out';
  saveState();
  showShoppingList();
};

window.addCustomShopItem = function () {
  const nameInput = document.getElementById('custom-item-name');
  const catInput = document.getElementById('custom-item-cat');
  const name = nameInput.value.trim();
  const cat = catInput.value;

  if (!name) return;

  // Prevent duplicates
  if (state.customShopItems.some(i => i.item === name)) return alert('Item already exists!');

  state.customShopItems.push({ item: name, category: cat });
  state.inventoryState[name] = 'out'; // Default to out
  saveState();

  nameInput.value = '';
  showShoppingList();
  triggerHaptic();
};

window.removeCustomShopItem = function (itemName) {
  state.customShopItems = state.customShopItems.filter(i => i.item !== itemName);
  delete state.inventoryState[itemName];
  saveState();
  showShoppingList();
  triggerHaptic();
};

window.triggerHaptic = function () {
  if (navigator.vibrate) navigator.vibrate(25);
};

window.confirmProductNeed = function (name, isNeeded) {
  triggerHaptic();

  if (isNeeded) {
    state.acknowledgedReplacements[name] = true;
  } else {
    // Reset timer to today since they have stock
    state.productStartDates[name] = getTodayKey();
    delete state.acknowledgedReplacements[name];
  }
  saveState();
  showShoppingList(); // Refresh list to show the item or remove the prompt
};

window.copyShoppingList = function () {
  let text = `🛒 ALDI SHOPPING LIST (${getViewedKey()})\n\n`;
  const viewedKey = getViewedKey();
  const weekIdx = getWeekIndex(viewedKey);
  const weekPlan = WEEKLY_PLANS[weekIdx] || WEEKLY_PLANS[0];
  const needed = new Set();

  Object.values(weekPlan).forEach(day => {
    const lunchTitle = day.lunch.replace('Lunch: ', '');
    const dinnerTitle = day.dinner.replace('Dinner: ', '');
    if (RECIPE_BOOK[lunchTitle]) RECIPE_BOOK[lunchTitle].ingredients.forEach(i => needed.add(i.toLowerCase()));
    if (RECIPE_BOOK[dinnerTitle]) RECIPE_BOOK[dinnerTitle].ingredients.forEach(i => needed.add(i.toLowerCase()));
  });
  Object.values(BREAKFAST_BOOK).forEach(recipe => recipe.ingredients.forEach(i => needed.add(i.toLowerCase())));

  const categories = {};
  ALDI_BULK_LIST.forEach(item => {
    const itemNameLower = item.item.toLowerCase();
    const isNeeded = Array.from(needed).some(ing => {
      const coreIng = ing.split(',')[0].split('(')[0].trim();
      const coreBulk = itemNameLower.split('(')[0].trim();
      return coreIng.includes(coreBulk) || coreBulk.includes(coreIng) || ing.includes(coreBulk) || itemNameLower.includes(coreIng);
    });
    if (isNeeded) {
      if (!categories[item.category]) categories[item.category] = [];
      categories[item.category].push(item.item);
    }
  });

  Object.keys(categories).sort().forEach(cat => {
    const outItems = categories[cat].filter(item => state.inventoryState[item] === 'out');
    if (outItems.length > 0) {
      text += `[${cat.toUpperCase()}]\n`;
      outItems.forEach(item => {
        text += `  - ${item}\n`;
      });
      text += `\n`;
    }
  });

  // Check Lifecycles for Copy (Only include if acknowledged)
  const lifecycles = [
    { name: 'Razor Head' },
    { name: 'Toothbrush' }
  ];
  let rotateText = '';
  lifecycles.forEach(prod => {
    if (state.acknowledgedReplacements[prod.name]) {
      rotateText += `  - REPLACE: ${prod.name}\n`;
    }
  });
  if (rotateText) text += `[REPLACEMENTS NEEDED]\n${rotateText}\n`;

  if (text.trim() === `🛒 ALDI SHOPPING LIST (${viewedKey})`) {
    text += "\nNo items marked as 'OUT'. Everything in stock! ✅";
  }

  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '✅ Copied!';
    triggerHaptic();
    setTimeout(() => btn.innerHTML = originalText, 2000);
  });
};

window.showStats = function () {
  const modal = document.getElementById('stats-modal');
  const content = document.getElementById('stats-content');

  // Process Weight Data
  const weights = Object.keys(state.weightLog).sort().map(date => ({
    date,
    weight: state.weightLog[date]
  })).slice(-10); // Last 10 readings

  let chartHtml = '<p style="color:var(--text-dim); font-size:0.8rem; margin-bottom:15px">Weight Trend (Last 10 Logs)</p>';

  if (weights.length > 1) {
    const minW = Math.min(...weights.map(w => w.weight)) - 1;
    const maxW = Math.max(...weights.map(w => w.weight)) + 1;
    const range = maxW - minW;
    const height = 100;
    const width = 280;
    const pts = weights.map((w, i) => {
      const x = (i / (weights.length - 1)) * width;
      const y = height - ((w.weight - minW) / range) * height;
      return `${x},${y}`;
    }).join(' ');

    chartHtml += `
            <div class="stats-card">
                <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:120px; overflow:visible">
                    <polyline points="${pts}" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    ${weights.map((w, i) => {
      const x = (i / (weights.length - 1)) * width;
      const y = height - ((w.weight - minW) / range) * height;
      return `<circle cx="${x}" cy="${y}" r="4" fill="var(--primary)" />`;
    }).join('')}
                </svg>
                <div style="display:flex; justify-content:space-between; margin-top:10px; font-size:0.7rem; color:var(--text-dim)">
                    <span>${weights[0].date.split('-').slice(1).join('/')}</span>
                    <span style="color:white; font-weight:700">${weights[weights.length - 1].weight}kg</span>
                    <span>${weights[weights.length - 1].date.split('-').slice(1).join('/')}</span>
                </div>
            </div>
        `;
  } else if (weights.length === 1) {
    chartHtml += `<div class="stats-card" style="text-align:center; padding:20px">Current Weight: <strong>${weights[0].weight}kg</strong><br><small style="color:var(--text-dim)">Log more days to see trend line</small></div>`;
  } else {
    chartHtml += `<div class="stats-card" style="text-align:center; padding:20px; color:var(--text-dim)">No weight logs yet. Start in your AM routine!</div>`;
  }

  // BMI & Progress
  const latestWeight = weights.length > 0 ? weights[weights.length - 1].weight : state.profile.startWeight;
  const bmi = (latestWeight / Math.pow(state.profile.height / 100, 2)).toFixed(1);
  const toGo = (state.profile.targetWeight - latestWeight).toFixed(1);
  const progressText = toGo <= 0 ? "Target Reached! 🚀" : `${toGo}kg to go`;

  chartHtml += `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:20px">
        <div class="stats-card">
            <div style="font-size:0.75rem; color:var(--text-dim)">Current BMI</div>
            <div style="font-size:1.4rem; font-weight:800; color:${bmi < 18.5 ? 'var(--urgent)' : 'var(--success)'}">${bmi}</div>
            <small style="font-size:0.65rem">${bmi < 18.5 ? 'Underweight' : 'Healthy Range'}</small>
        </div>
        <div class="stats-card">
            <div style="font-size:0.75rem; color:var(--text-dim)">Target Weight</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--primary)">${state.profile.targetWeight}kg</div>
            <small style="font-size:0.65rem">${progressText}</small>
        </div>
    </div>
  `;

  // Routine Completion (Overall)
  const totalDone = Object.values(state.completed).filter(v => v).length;
  chartHtml += `
        <div class="stats-card" style="margin-top:20px">
            <div style="font-size:0.8rem; color:var(--text-dim); margin-bottom:10px">Total Tasks Completed</div>
            <div style="font-size:1.8rem; font-weight:800; color:var(--primary)">${totalDone}</div>
        </div>
    `;

  // Macro Trends
  const historyDates = Object.keys(state.macroHistory).sort().slice(-7);
  if (historyDates.length > 0) {
    const avgKcal = Math.round(historyDates.reduce((acc, d) => acc + state.macroHistory[d].kcal, 0) / historyDates.length);
    const avgProt = Math.round(historyDates.reduce((acc, d) => acc + state.macroHistory[d].protein, 0) / historyDates.length);

    chartHtml += `<p style="color:var(--text-dim); font-size:0.8rem; margin:25px 0 15px">Bulk Progress (Last 7 Days)</p>`;
    chartHtml += `
      <div class="stats-card" style="display:flex; justify-content:space-between; margin-bottom:15px">
        <div><small>Weekly Avg Kcal</small><br><strong>🔥 ${avgKcal}</strong></div>
        <div><small>Weekly Avg Protein</small><br><strong>💪 ${avgProt}g</strong></div>
      </div>
    `;

    // Calories Chart
    const maxKcal = Math.max(...historyDates.map(d => state.macroHistory[d].kcal), 3000);
    const kcalGoalY = 100 - (3000 / maxKcal * 100);
    chartHtml += `<small style="color:var(--text-dim)">Calories (Target ~3000)</small>`;
    chartHtml += `<div class="chart-container" style="height:60px; margin-bottom:15px; position:relative">
      <div class="chart-goal-line" style="top:${kcalGoalY}%"><span class="goal-label">3k Goal</span></div>
      ${historyDates.map(d => {
      const val = state.macroHistory[d].kcal;
      return `<div class="chart-bar-wrap"><div class="chart-bar" style="height:${(val / maxKcal) * 100}%" title="${d}: ${val}kcal"></div></div>`;
    }).join('')}
    </div>`;

    // Protein Chart
    const maxProt = Math.max(...historyDates.map(d => state.macroHistory[d].protein), 180);
    const protGoalY = 100 - (180 / maxProt * 100);
    chartHtml += `<small style="color:var(--text-dim)">Protein (Target ~180g)</small>`;
    chartHtml += `<div class="chart-container" style="height:60px; position:relative">
      <div class="chart-goal-line" style="top:${protGoalY}%"><span class="goal-label">180g Goal</span></div>
      ${historyDates.map(d => {
      const val = state.macroHistory[d].protein;
      return `<div class="chart-bar-wrap"><div class="chart-bar" style="height:${(val / maxProt) * 100}%" title="${d}: ${val}g"></div></div>`;
    }).join('')}
    </div>`;
  }

  // Elite Metrics: Tonnage and Focus Score
  const currentTonnage = state.tonnageHistory[viewedKey] || 0;
  const currentFocus = state.focusScore[viewedKey] || 0;

  chartHtml += `
    <p style="color:var(--text-dim); font-size:0.8rem; margin:25px 0 15px">Elite Performance Metrics</p>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px">
        <div class="stats-card">
            <div style="font-size:0.75rem; color:var(--text-dim)">Total Tonnage</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--success)">${currentTonnage.toLocaleString()}kg</div>
            <small style="font-size:0.65rem">Daily Lift Volume</small>
        </div>
        <div class="stats-card">
            <div style="font-size:0.75rem; color:var(--text-dim)">Focus Score</div>
            <div style="font-size:1.4rem; font-weight:800; color:var(--primary-alt)">${currentFocus}</div>
            <small style="font-size:0.65rem">Pomodoros Today</small>
        </div>
    </div>
  `;

  content.innerHTML = chartHtml;
  modal.classList.add('active');
};

window.closeModal = function () {
  document.getElementById('shop-modal').classList.remove('active');
  document.getElementById('recipe-modal').classList.remove('active');
  document.getElementById('deadline-modal').classList.remove('active');
  document.getElementById('stats-modal').classList.remove('active');
  if (document.getElementById('pomodoro-overlay')) document.getElementById('pomodoro-overlay').classList.remove('active');
};

window.toggleShoppingStrike = function (itemName) {
  state.shoppingStrikes[itemName] = !state.shoppingStrikes[itemName];
  saveState();
  showShoppingList(); // Re-render list
};

function updateStats() {
  const viewedKey = getViewedKey();
  const tasks = document.querySelectorAll('.task-card');
  const done = Array.from(tasks).filter(t => t.classList.contains('done')).length;
  const total = tasks.length;

  const progress = total > 0 ? Math.round((done / total) * 100) : 0;

  const progressFill = document.getElementById('progress-fill');
  if (progressFill) progressFill.style.width = `${progress}%`;

  const progressText = document.getElementById('progress-text');
  if (progressText) progressText.textContent = `${progress}% Complete`;

  // Update streak (simplified)
  document.getElementById('streak-count').textContent = state.streak || 0;

  // Bulk Macros calculation
  let totalKcal = 0;
  let totalProtein = 0;
  const dayPlan = getDayPlan(viewedKey);

  // Check Meal completion using correct IDs
  if (state.completed[`${viewedKey}:meal-1`]) {
    const brkTitle = dayPlan.breakfast.replace(/^(<b>Breakfast:<\/b>|Breakfast:)\s*/, '');
    const recipe = BREAKFAST_BOOK[brkTitle];
    if (recipe) { totalKcal += recipe.kcals; totalProtein += recipe.protein; }
  }
  if (state.completed[`${viewedKey}:meal-2`]) {
    const lunTitle = dayPlan.lunch.replace(/^(<b>Lunch:<\/b>|Lunch:)\s*/, '');
    const recipe = RECIPE_BOOK[lunTitle];
    if (recipe) { totalKcal += recipe.kcals; totalProtein += recipe.protein; }
  }
  if (state.completed[`${viewedKey}:meal-bulk-shake`]) {
    const dinTitle = dayPlan.dinner.replace(/^(<b>Dinner:<\/b>|Dinner:)\s*/, '');
    const recipe = RECIPE_BOOK[dinTitle] || { kcals: 800, protein: 55 };
    if (recipe) { totalKcal += recipe.kcals; totalProtein += recipe.protein; }
  }
  // Check for specialized dinner (often meal-2 is used for both in this logic, but let's be precise)
  // If dinner is tracked separately, we'd need another ID, but for now we follow the 3-meal structure

  // Calculate Total Tonnage for the day
  let dailyTonnage = 0;
  Object.keys(state.overloadData).forEach(taskId => {
    const data = state.overloadData[taskId];
    if (data.last && data.last.date === viewedKey) {
      data.last.exercises.forEach(ex => {
        if (ex.weight && ex.sets && ex.reps) {
          dailyTonnage += (parseFloat(ex.weight) * parseFloat(ex.sets) * parseFloat(ex.reps));
        }
      });
    }
  });
  state.tonnageHistory[viewedKey] = dailyTonnage;

  const kcalEl = document.getElementById('daily-kcals');
  const protEl = document.getElementById('daily-protein');
  const sugEl = document.getElementById('macro-suggestion');

  if (kcalEl) kcalEl.textContent = `🔥 ${totalKcal} kcal`;
  if (protEl) protEl.textContent = `💪 ${totalProtein}g Protein`;

  // Bulk Micro-Adjuster Logic
  const PROT_TARGET = 180;
  if (totalProtein < PROT_TARGET && (dayState['task-brk-1'] || dayState['task-lun-1'] || dayState['task-din-1'])) {
    const deficit = PROT_TARGET - totalProtein;
    // Find best hack that covers at least most of the deficit
    const hack = PROTEIN_HACKS.find(h => deficit >= h.min) || PROTEIN_HACKS[PROTEIN_HACKS.length - 1];

    if (sugEl) {
      sugEl.innerHTML = `💡 <b>Bulk Micro-Adjuster:</b> ${hack.desc} Add <i>${hack.item}</i> (+${hack.prot}g Protein)`;
      sugEl.style.display = 'block';
    }
  } else if (sugEl) {
    sugEl.style.display = 'none';
  }

  // Save to History for trends
  state.macroHistory[viewedKey] = { kcal: totalKcal, protein: totalProtein };
  saveState();

  const d = new Date(viewedKey);
  const displayDate = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  const dateHero = document.getElementById('today-date');
  if (dateHero) {
    const todayKey = getTodayKey();
    dateHero.textContent = viewedKey === todayKey ? `Today: ${displayDate}` : displayDate;
  }
}

// --- Backup & Restore ---
window.exportState = function () {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `daily-routine-backup-${getTodayKey()}.json`;
  a.click();
  URL.revokeObjectURL(url);
};

window.importState = function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (confirm('Importing will overwrite your current progress. Continue?')) {
        state = { ...state, ...imported };
        saveState();
        location.reload();
      }
    } catch (err) {
      alert('Invalid backup file!');
    }
  };
  reader.readAsText(file);
};

// --- Meal Shuffle (Strict Budget Version) ---
window.shuffleMeal = function (taskId) {
  const viewedKey = getViewedKey();
  const weekIdx = getWeekIndex(viewedKey);
  const weekPlan = WEEKLY_PLANS[weekIdx] || WEEKLY_PLANS[0];
  const isBreakfast = taskId === 'meal-breakfast';
  const targetBook = isBreakfast ? BREAKFAST_BOOK : RECIPE_BOOK;

  // BUDGET STRICTION: Only shuffle into something we're ALREADY buying for the base plan
  const baseIngredients = new Set();

  // Staples are always available
  ['oats', 'greek yogurt', 'berries', 'peanut butter', 'milk', 'cottage cheese', 'nuts', 'bread', 'pasta', 'rice', 'eggs', 'spinach'].forEach(i => baseIngredients.add(i));

  // Ingredients for the BASE week plan (ignore existing shuffles for strict budget)
  Object.values(weekPlan).forEach(day => {
    const lunchTitle = day.lunch.replace('Lunch: ', '');
    const dinnerTitle = day.dinner.replace('Dinner: ', '');
    if (RECIPE_BOOK[lunchTitle]) RECIPE_BOOK[lunchTitle].ingredients.forEach(i => baseIngredients.add(i.toLowerCase()));
    if (RECIPE_BOOK[dinnerTitle]) RECIPE_BOOK[dinnerTitle].ingredients.forEach(i => baseIngredients.add(i.toLowerCase()));
  });

  // Filter Book for options that don't require NEW items
  const options = Object.keys(targetBook).filter(mealTitle => {
    const recipe = targetBook[mealTitle];
    return recipe.ingredients.every(ing => {
      const ingLower = ing.toLowerCase();
      return Array.from(baseIngredients).some(baseIng => {
        const coreBase = baseIng.split(' (')[0].split(',')[0].trim();
        const coreRecipe = ingLower.split(' (')[0].split(',')[0].trim();
        return coreRecipe.includes(coreBase) || coreBase.includes(coreRecipe.split(' ')[0]);
      });
    });
  });

  if (options.length <= 1) return alert('Budget reached! No alternative meals found without buying "one-off" items.');

  const currentText = state.shuffledMeals[`${viewedKey}:${taskId}`] || '';
  let picked = options[Math.floor(Math.random() * options.length)];
  if (picked === currentText && options.length > 1) {
    picked = options.filter(o => o !== currentText)[Math.floor(Math.random() * (options.length - 1))];
  }

  const prefix = taskId === 'meal-lunch' ? 'Lunch: ' : (taskId === 'meal-dinner' ? 'Dinner: ' : 'Breakfast: ');
  state.shuffledMeals[`${viewedKey}:${taskId}`] = prefix + picked;

  saveState();
  renderTimeline();
};

// --- Hydration ---
window.addHydration = function (val) {
  const viewedKey = getViewedKey();
  const current = state.hydrationCount[viewedKey] || 0;

  // Toggle logic: if clicking the current glass, down-cycle. Otherwise set to clicked index.
  state.hydrationCount[viewedKey] = (current === val) ? val - 1 : val;

  // Auto-complete task if 8 glasses reached
  const fullId = `${viewedKey}:day-hydration`;
  if (state.hydrationCount[viewedKey] >= 8) {
    state.completed[fullId] = true;
  } else {
    state.completed[fullId] = false;
  }

  saveState();
  renderTimeline();
  updateStats();
};

// --- Progress Charts ---
window.showStats = function () {
  const modal = document.getElementById('stats-modal');
  const content = document.getElementById('stats-content');

  let html = '';

  // Track exercises with data
  const trackedItems = Object.keys(state.overloadData);

  if (trackedItems.length === 0) {
    html = `<div class="empty-stats">Log some gym sessions or pullups to see your progress charts!</div>`;
  } else {
    trackedItems.forEach(taskId => {
      const data = state.overloadData[taskId];
      if (data.history && data.history.length > 0) {
        // Find the "primary" exercise or average if multi-ex
        const points = data.history.map(entry => {
          // For multi-ex, use the first exercise for the chart trend
          const val = entry.exercises[0].weight || entry.exercises[0].reps || 0;
          return { date: entry.date, val: parseFloat(val) };
        });

        const maxVal = Math.max(...points.map(p => p.val)) || 10;

        html += `
          <div class="stat-group">
            <h4 class="stat-title">${taskId.replace(/-(.)/g, (_, c) => ' ' + c.toUpperCase()).toUpperCase()}</h4>
            <div class="chart-container">
              ${points.map(p => `
                <div class="chart-bar-wrap">
                  <div class="chart-bar" style="height: ${(p.val / maxVal) * 100}%" title="${p.date}: ${p.val}"></div>
                  <span class="chart-label">${p.date.split('-').slice(1).join('/')}</span>
                </div>
              `).join('')}
            </div>
            <div class="stat-meta">Peak Intensity: ${maxVal}</div>
          </div>
        `;
      }
    });
  }

  content.innerHTML = html;
  modal.classList.add('active');
};

// --- Pomodoro Study Timer ---
let timerInterval = null;
let timerSeconds = 25 * 60;
let isRunning = false;

window.openTimer = function () {
  document.getElementById('pomodoro-overlay').classList.add('active');
  updateTimerDisplay();
};

window.closeTimer = function () {
  clearInterval(timerInterval);
  isRunning = false;
  document.getElementById('pomodoro-overlay').classList.remove('active');
};

window.toggleTimer = function () {
  const btn = document.getElementById('timer-toggle-btn');
  if (isRunning) {
    clearInterval(timerInterval);
    btn.textContent = 'Start';
    isRunning = false;
  } else {
    isRunning = true;
    btn.textContent = 'Pause';
    timerInterval = setInterval(() => {
      timerSeconds--;
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        const viewedKey = getViewedKey();
        state.focusScore[viewedKey] = (state.focusScore[viewedKey] || 0) + 1;
        saveState();
        alert('Focus Session Complete! Take a 5-minute break.');
        resetTimer();
      }
      updateTimerDisplay();
    }, 1000);
  }
};

window.resetTimer = function () {
  clearInterval(timerInterval);
  isRunning = false;
  timerSeconds = 25 * 60;
  document.getElementById('timer-toggle-btn').textContent = 'Start';
  updateTimerDisplay();
};

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  document.getElementById('timer-display').textContent =
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

document.addEventListener('DOMContentLoaded', init);
