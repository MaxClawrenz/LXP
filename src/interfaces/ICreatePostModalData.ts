import { EditorState } from "draft-js";

export interface ICreatePostModalData {
    postName: string,
    content: EditorState
}