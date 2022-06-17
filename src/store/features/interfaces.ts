//fetch user repos
export interface UserRepos {
  name: string;
  url: string;
  owner: Owner;
  fullName: string;
  created: string;
  update: string;
  size: number;
}
export interface Owner {
  login: string;
  avatar_url: string;
}

// fetch commit
export interface Commit {
  author: Author;
  committer: Author;
  tree: Tree;
  message: string;
  url: string;
  date: Date;
  user: string;
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
