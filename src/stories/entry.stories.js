import { storiesOf } from "@storybook/vue";
import Entry from "../components/Entry.vue";

storiesOf("Entry", module).add("with text", () => ({
  components: { Entry },
  template: "<entry id='asdf' content='Some content here' mood='whelp'>"
}));
