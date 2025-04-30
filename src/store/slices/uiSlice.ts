import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentItem, NavItem } from '@/types';

interface UiState {
  navItems: NavItem[];
  contentItems: ContentItem[];
  language: string;
  isMobileMenuOpen: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'overview',
    title: 'Überblick',
    content: 'Du möchtest die deutsche Staatsbürgerschaft beantragen? Wir helfen dir dabei. Hier bekommst du nützliche Tipps für eine Einbürgerung in Berlin. Du hast Fragen zum Online-Antrag? Du willst wissen, welche Unterlagen du dafür brauchst? Du suchst eine persönliche Beratung? Los geht\'s!',
    expanded: true,
  },
  {
    id: 'documents',
    title: 'Unterlagen',
    expanded: false,
  },
  {
    id: 'counseling',
    title: 'Beratung',
    expanded: false,
  },
  {
    id: 'videos',
    title: 'Videos',
    expanded: false,
  },
  {
    id: 'online-request',
    title: 'Online beantragen',
    expanded: false,
  }
];

const overviewSubItems: ContentItem[] = [
  {
    id: 'responsible-authority',
    title: 'Welche Behörde ist zuständig?',
    content: 'Das Landesamt für Einwanderung (LEA) ist zuständig für die Einbürgerung in Berlin. Sie entscheiden über deinen Antrag.',
    expanded: true,
  },
  {
    id: 'online-application',
    title: '1. Online-Antrag stellen',
    content: 'Dein erster Schritt: Prüfe, ob du dich einbürgern lassen kannst. Dafür kannst du den Quick-Check (↗) im Berliner ServicePortal nutzen. Der Quick Check ist kostenlos und bietet eine erste Orientierung. Er ersetzt keine offizielle Prüfung deines Antrags. Wenn du die Voraussetzungen erfüllst, kannst du den Antrag auf Einbürgerung stellen. Sammle dafür deine Unterlagen zusammen. Unsere Seite "Meine Unterlagen" (↓) unterstützt dich dabei. Das Ausfüllen des Online-Antrags dauert mindestens zwei Stunden. Das machst du im Berliner ServicePortal.',
    expanded: true,
  },
  {
    id: 'costs',
    title: '2. Kosten',
    content: 'Der Antrag kostet 255,00 Euro. Du musst per Kreditkarte oder Paypal zahlen. Es kann mehr Geld kosten, wenn du deine bisherige Staatsangehörigkeit aufgibst. Informiere dich darüber beim Konsulat von deinem Heimatland.',
    expanded: true,
  },
  {
    id: 'german-language',
    title: '3. Deutschkenntnisse',
    content: 'Du benötigst "ausreichende Deutschkenntnisse". Das bedeutet ein Niveau B1 oder mehr. Dafür brauchst du noch ein Zertifikat.',
    expanded: true,
    items: [
      {
        id: 'german-certificate',
        title: 'Ich habe kein oder kaum Deutsch.',
        content: 'Dann besuche einen Deutschkurs. Wie das geht und wo in Berlin du einen Deutschkurs machen kannst, findest du hier (↓).'
      },
      {
        id: 'german-speaking',
        title: 'Ich spreche Deutsch aber habe kein Zertifikat.',
        content: 'Dann kannst du eine Prüfung machen. Das geht bei den Volkshochschulen in Berlin (↓) oder beim Goethe-Institut (↓). Die Prüfungen sind nicht umsonst und kosten Geld. Wenn du die Prüfung bestehst, bekommst du das Zertifikat.'
      },
      {
        id: 'german-school',
        title: 'Ich gehe in Deutschland zur Schule oder bin in Deutschland zur Schule gegangen.',
        content: 'Dann brauchst du nur ein Nachweis darüber. Mehr Informationen findest du unter "Meine Unterlagen".'
      }
    ]
  }
];

const initialState: UiState = {
  navItems: [
    { id: 'home', title: 'Startseite', path: '/', active: true },
    { id: 'stay', title: 'Aufenthalt', path: '/aufenthalt', active: false },
    { id: 'citizenship', title: 'Einbürgerung', path: '/einbuergerung', active: false }
  ],
  contentItems: contentItems,
  language: 'de',
  isMobileMenuOpen: false
};

// Add the sub-items to the overview item
initialState.contentItems[0].items = overviewSubItems;

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setActiveNav: (state, action: PayloadAction<string>) => {
      state.navItems.forEach(item => {
        item.active = item.id === action.payload;
      });
    },
    toggleContentItem: (state, action: PayloadAction<string>) => {
      state.contentItems.forEach(item => {
        if (item.id === action.payload) {
          item.expanded = !item.expanded;
        }
      });
    },
    toggleSubItem: (state, action: PayloadAction<{ parentId: string; itemId: string }>) => {
      const parent = state.contentItems.find(item => item.id === action.payload.parentId);
      if (parent && parent.items) {
        const subItem = parent.items.find(item => item.id === action.payload.itemId);
        if (subItem) {
          subItem.expanded = !subItem.expanded;
        }
      }
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    }
  }
});

export const { setActiveNav, toggleContentItem, toggleSubItem, setLanguage, toggleMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;