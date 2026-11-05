export function performAction(
  action: string,
  element: HTMLElement | SVGElement,
) {
  const api = window as unknown as Record<string, (...args: unknown[]) => void>;
  if (action.startsWith("showInfo(")) {
    const m = action.match(/showInfo\('([^']+)'\)/);
    if (m) api.showInfo?.(m[1]);
  } else if (action === "closeIntro()") api.closeIntro?.();
  else if (action === "replay()") api.replay?.();
  else if (action === "toggleCycle(this)") api.toggleCycle?.(element);
  else if (action.includes("speaker-open")) {
    const open = element.classList.toggle("speaker-open");
    element.setAttribute("aria-expanded", String(open));
  } else if (action.includes("ox-paused")) {
    const paused = document
      .getElementById("home")
      ?.classList.toggle("ox-paused");
    element.textContent = paused ? "Resume motion" : "Pause motion";
    element.setAttribute("aria-pressed", String(paused));
  } else if (action.includes(".close()"))
    (document.getElementById("modal") as HTMLDialogElement)?.close();
  else if (action.includes("registration-success")) {
    document.getElementById("registration-success")!.hidden = true;
    document.getElementById("registration-body")!.hidden = false;
    document
      .querySelector<HTMLInputElement>("#registration-form input")
      ?.focus();
  }
}
