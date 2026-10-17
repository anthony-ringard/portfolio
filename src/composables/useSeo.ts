import { onMounted } from "vue";
import { setSeo } from "../lib/seo";

export function useSeo(title: string, description: string, path: string): void {
  onMounted(() => setSeo(title, description, path));
}
