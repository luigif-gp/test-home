export interface Commit {
  author: Author;
  committer: Author;
  tree: Tree;
  message: string;
}
interface Author {
  name: string;
  email: string;
  date: string;
}
interface Tree {
  sha: string;
  url: string;
}
