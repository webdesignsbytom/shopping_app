import 'jquery';

declare global {
  interface JQuery {
    jPlayer: (options: any) => JQuery;
    jPlayer(method: string, ...args: any[]): JQuery;
  }
}

declare module 'jplayer' {
    interface JPlayerOptions {
      ready?: () => void;
      swfPath?: string;
      supplied?: string;
      volume?: number;
      size?: {
        width: string;
        height: string;
      };
      cssSelectorAncestor?: string;
      cssSelector?: {
        play?: string;
        pause?: string;
        stop?: string;
        mute?: string;
        unmute?: string;
        currentTime?: string;
        duration?: string;
      };
      muted?: boolean;
    }
  
    interface JPlayer {
      jPlayer: (method: string, ...args: any[]) => JPlayer;
    }
  
    interface JQuery {
      jPlayer(options: JPlayerOptions): JQuery;
      jPlayer(method: string, ...args: any[]): JQuery;
    }
  }
  