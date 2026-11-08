export const readCurrentDesktopOnPlatform = () => process.env.XDG_CURRENT_DESKTOP ?? null;

export const readSessionDesktopOnPlatform = () => process.env.XDG_SESSION_DESKTOP ?? null;
