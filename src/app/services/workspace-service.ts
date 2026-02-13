import {Injectable, signal, WritableSignal} from '@angular/core';

import json from "../core/json/workspace.json";
import {
  ChapterInterface,
  WorkspaceInterface
} from '../core/interfaces/workspaceInterfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  private _names: WritableSignal<string[] | null> = signal(null)
  private _chapters: WritableSignal<ChapterInterface[] | null> = signal(null)
  private _currentName: WritableSignal<string | null> = signal(null)
  private _currentChapter: WritableSignal<ChapterInterface | null> = signal(null);

  readonly currentName = this._currentName.asReadonly();
  readonly names = this._names.asReadonly();
  readonly currentChapter = this._currentChapter.asReadonly();


  public parseWorkspace() {
    const workspace: WorkspaceInterface = json
    const names = []
    const chapters = []
    for (const i in workspace) {
      names.push(i)
      chapters.push(workspace[i])
    }
    this._names.set(names)
    this._chapters.set(chapters)
    this._currentChapter.set(chapters[0])
    this._currentName.set(names[0])
  }

  public setChapter(name: string) {
    const chapters = this._chapters()
    const names = this._names()
    if (chapters && names) {
      this._currentChapter.set(chapters[names.indexOf(name)])
      this._currentName.set(name)
    }
  }

  public setChosen(name: string) {
    const currentChapter = this.currentChapter()
    if (currentChapter) {
      currentChapter[name].chosen = true
    }

  }
}
