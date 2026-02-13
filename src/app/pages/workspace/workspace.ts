import {
  Component,
  computed,
  inject,
  signal,
  Signal,
  WritableSignal, OnInit
} from '@angular/core';
import {WorkspaceService} from '../../services/workspace-service';
import {WorkspaceRu} from '../../core/localization/workspace-ru';
import {ChapterInterface} from '../../core/interfaces/workspaceInterfaces';
import {CommonModule, KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-workspace',
  imports: [
    KeyValuePipe,
    CommonModule
  ],
  templateUrl: './workspace.html',
  styleUrl: './workspace.scss',
})
export class Workspace implements OnInit {
  private workspaceService = inject(WorkspaceService)

  public names: Signal<null | string[]> = computed(() => {
    return this.workspaceService.names()
  })
  public name: Signal<null | string> = computed(() => {
    return this.workspaceService.currentName()
  })
  public currentChapter: Signal<null | ChapterInterface> = computed(() => {
    return this.workspaceService.currentChapter()
  })

  public chosenChapters: WritableSignal<number> = signal(0)
  public chapterSum: WritableSignal<number> = signal(0)

  ngOnInit() {
    this.workspaceService.parseWorkspace()
  }

  private calc() {
    let val = 0
    let count = 0
    const cur = this.currentChapter()
    if (cur) {
      for (const checkbox in cur) {
        if (cur[checkbox]?.chosen) {
          val += cur[checkbox].value
          count++
        }
      }
    }
    this.chapterSum.set(val)
    this.chosenChapters.set(count)
    console.log(this.chapterSum())
  }

  public setChapter(name: string) {
    this.workspaceService.setChapter(name)
    this.calc()
  }

  public setChosen(name: string) {
    this.workspaceService.setChosen(name)
    this.calc()
  }

  protected readonly WorkspaceRu = WorkspaceRu;
}
