export type WorkspaceInterface = Record<string, ChapterInterface>;

export type ChapterInterface = Record<string, CheckBoxInterface>;

export interface CheckBoxInterface {
  value: number,
  chosen?: boolean
}
