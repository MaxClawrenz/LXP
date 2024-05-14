export interface CommentLxp {
  fio: string;
  date: string;
  id: string;
  key: string;
  person_id: string;
  self: boolean;
  message: string;
  file_ids: string;
  childrenArr: any[];
  class: string;
  date2: string;
  likes_count: number;
  blog_id: string;
  parent_comment_id: string;
  fio_parent: string;

  updateCommentsCount: (newCount: number) => void;
}
