import type ObsidianGit from "../main";
export class LocalStorageSettings {
    private prefix: string;
    constructor(private readonly plugin: ObsidianGit) {
        this.prefix = this.plugin.manifest.id + ":";
    }

    migrate(): void {
        const keys = [
            "password",
            "hostname",
            "conflict",
            "lastAutoPull",
            "lastAutoBackup",
            "lastAutoPush",
            "gitPath",
            "pluginDisabled",
        ];
        for (const key of keys) {
            const old = localStorage.getItem(this.prefix + key);
            if (
                this.plugin.app.loadLocalStorage(this.prefix + key) == null &&
                old != null
            ) {
                if (old != null) {
                    this.plugin.app.saveLocalStorage(this.prefix + key, old);
                    localStorage.removeItem(this.prefix + key);
                }
            }
        }
    }

    getPassword(): string | null {
        return this.plugin.app.loadLocalStorage(this.prefix + "password");
    }

    setPassword(value: string): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "password",
            value
        );
    }

    getUsername(): string | null {
        return this.plugin.app.loadLocalStorage(this.prefix + "username");
    }

    setUsername(value: string): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "username",
            value
        );
    }

    getHostname(): string | null {
        return this.plugin.app.loadLocalStorage(this.prefix + "hostname");
    }

    setHostname(value: string): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "hostname",
            value
        );
    }

    getConflict(): boolean {
        return (
            this.plugin.app.loadLocalStorage(this.prefix + "conflict") == "true"
        );
    }

    setConflict(value: boolean): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "conflict",
            `${value}`
        );
    }

    getLastAutoPull(): string | null {
        return this.plugin.app.loadLocalStorage(this.prefix + "lastAutoPull");
    }

    setLastAutoPull(value: string): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "lastAutoPull",
            value
        );
    }

    getLastAutoBackup(): string | null {
        return this.plugin.app.loadLocalStorage(this.prefix + "lastAutoBackup");
    }

    setLastAutoBackup(value: string): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "lastAutoBackup",
            value
        );
    }

    getLastAutoPush(): string | null {
        return this.plugin.app.loadLocalStorage(this.prefix + "lastAutoPush");
    }

    setLastAutoPush(value: string): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "lastAutoPush",
            value
        );
    }

    getGitPath(): string | null {
        return this.plugin.app.loadLocalStorage(this.prefix + "gitPath");
    }

    setGitPath(value: string): void {
        return this.plugin.app.saveLocalStorage(this.prefix + "gitPath", value);
    }

    getPATHPaths(): string[] {
        return (
            this.plugin.app
                .loadLocalStorage(this.prefix + "PATHPaths")
                ?.split(":") ?? []
        );
    }

    setPATHPaths(value: string[]): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "PATHPaths",
            value.join(":")
        );
    }

    getEnvVars(): string[] {
        return JSON.parse(
            this.plugin.app.loadLocalStorage(this.prefix + "envVars") ?? "[]"
        );
    }

    setEnvVars(value: string[]): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "envVars",
            JSON.stringify(value)
        );
    }

    getPluginDisabled(): boolean {
        return (
            this.plugin.app.loadLocalStorage(this.prefix + "pluginDisabled") ==
            "true"
        );
    }

    setPluginDisabled(value: boolean): void {
        return this.plugin.app.saveLocalStorage(
            this.prefix + "pluginDisabled",
            `${value}`
        );
    }
}
