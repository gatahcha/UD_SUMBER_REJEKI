import { bindPrimaryNavigation } from "./components/primary-nav.js";
import { bindMobileDrawer } from "./components/mobile-drawer.js";
import { hydrateContactLinks } from "./components/contact-links.js";
import { bindGalleryFilterBar } from "./components/gallery-filter-bar.js";
import { enhanceFooterWidgets } from "./components/footer-widgets.js";
import { bindLanguageSwitcher, repaintChrome } from "./i18n.js";
import { getLang } from "./locale-store.js";

async function bootstrap() {
  bindLanguageSwitcher();
  bindPrimaryNavigation();
  bindMobileDrawer();
  bindGalleryFilterBar();

  try {
    await hydrateContactLinks();
  } catch (_) {
    /* optional */
  }

  try {
    await enhanceFooterWidgets();
  } catch (_) {
    /* optional */
  }

  repaintChrome(getLang());
}

bootstrap();
