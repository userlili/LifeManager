import axios from "axios";
import { BasicResult } from "#/resultType";
import { http } from "@/utils/http";

export type GithubCommitResultType = {
  commit: {
    author: {
      date: string;
    };
    message: string;
  };
  html_url: string;
};

export type contentType = {
  message: string;
  html_url: string;
};

/**
 *
 * @description 获取仓库commit信息
 */
export const fetchCommits = (user: string, repo: string, token: string) => {
  const url = `https://api.github.com/repos/${user}/${repo}/commits?access_token=${token}`;
  return new Promise<BasicResult<GithubCommitResultType[]>>(async (resolve, reject) => {
    try {
      const res = await axios.get<{}, BasicResult<GithubCommitResultType[]>>(url, {
        headers: {
          // token30天需要更换一次
          Authorization: "Bearer " + token
        }
      });
      // lili:可以用下面这个用来测试数据
      // const res = JSON.parse('{"data":[{"sha":"6e953a5dc81ca6f3d4b21f40e46336abf329b427","node_id":"C_kwDOHWPF0toAKDZlOTUzYTVkYzgxY2E2ZjNkNGIyMWY0MGU0NjMzNmFiZjMyOWI0Mjc","commit":{"author":{"name":"cloudhao1999","email":"cyh19991002@gmail.com","date":"2022-09-07T13:31:15Z"},"committer":{"name":"cloudhao1999","email":"cyh19991002@gmail.com","date":"2022-09-07T13:31:15Z"},"message":"fix: 修复ts类型报错","tree":{"sha":"2f3ad722eb24a6e733322094e77d91883defb4d7","url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/git/trees/2f3ad722eb24a6e733322094e77d91883defb4d7"},"url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/git/commits/6e953a5dc81ca6f3d4b21f40e46336abf329b427","comment_count":0,"verification":{"verified":false,"reason":"unsigned","signature":null,"payload":null}},"url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/commits/6e953a5dc81ca6f3d4b21f40e46336abf329b427","html_url":"https://github.com/cloudhao1999/cloud-app-admin/commit/6e953a5dc81ca6f3d4b21f40e46336abf329b427","comments_url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/commits/6e953a5dc81ca6f3d4b21f40e46336abf329b427/comments","author":{"login":"cloudhao1999","id":32376445,"node_id":"MDQ6VXNlcjMyMzc2NDQ1","avatar_url":"https://avatars.githubusercontent.com/u/32376445?v=4","gravatar_id":"","url":"https://api.github.com/users/cloudhao1999","html_url":"https://github.com/cloudhao1999","followers_url":"https://api.github.com/users/cloudhao1999/followers","following_url":"https://api.github.com/users/cloudhao1999/following{/other_user}","gists_url":"https://api.github.com/users/cloudhao1999/gists{/gist_id}","starred_url":"https://api.github.com/users/cloudhao1999/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/cloudhao1999/subscriptions","organizations_url":"https://api.github.com/users/cloudhao1999/orgs","repos_url":"https://api.github.com/users/cloudhao1999/repos","events_url":"https://api.github.com/users/cloudhao1999/events{/privacy}","received_events_url":"https://api.github.com/users/cloudhao1999/received_events","type":"User","site_admin":false},"committer":{"login":"cloudhao1999","id":32376445,"node_id":"MDQ6VXNlcjMyMzc2NDQ1","avatar_url":"https://avatars.githubusercontent.com/u/32376445?v=4","gravatar_id":"","url":"https://api.github.com/users/cloudhao1999","html_url":"https://github.com/cloudhao1999","followers_url":"https://api.github.com/users/cloudhao1999/followers","following_url":"https://api.github.com/users/cloudhao1999/following{/other_user}","gists_url":"https://api.github.com/users/cloudhao1999/gists{/gist_id}","starred_url":"https://api.github.com/users/cloudhao1999/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/cloudhao1999/subscriptions","organizations_url":"https://api.github.com/users/cloudhao1999/orgs","repos_url":"https://api.github.com/users/cloudhao1999/repos","events_url":"https://api.github.com/users/cloudhao1999/events{/privacy}","received_events_url":"https://api.github.com/users/cloudhao1999/received_events","type":"User","site_admin":false},"parents":[{"sha":"d734c124811ff93e6baed8db54003bb87de4354b","url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/commits/d734c124811ff93e6baed8db54003bb87de4354b","html_url":"https://github.com/cloudhao1999/cloud-app-admin/commit/d734c124811ff93e6baed8db54003bb87de4354b"}]},{"sha":"d734c124811ff93e6baed8db54003bb87de4354b","node_id":"C_kwDOHWPF0toAKGQ3MzRjMTI0ODExZmY5M2U2YmFlZDhkYjU0MDAzYmI4N2RlNDM1NGI","commit":{"author":{"name":"cloudhao1999","email":"cyh19991002@gmail.com","date":"2022-09-07T13:28:27Z"},"committer":{"name":"cloudhao1999","email":"cyh19991002@gmail.com","date":"2022-09-07T13:28:27Z"},"message":"feat: timeLine组件支持模拟数据","tree":{"sha":"a8802c3a93c1a3d29f2f9cba9fe0b745c89ac2b9","url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/git/trees/a8802c3a93c1a3d29f2f9cba9fe0b745c89ac2b9"},"url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/git/commits/d734c124811ff93e6baed8db54003bb87de4354b","comment_count":0,"verification":{"verified":false,"reason":"unsigned","signature":null,"payload":null}},"url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/commits/d734c124811ff93e6baed8db54003bb87de4354b","html_url":"https://github.com/cloudhao1999/cloud-app-admin/commit/d734c124811ff93e6baed8db54003bb87de4354b","comments_url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/commits/d734c124811ff93e6baed8db54003bb87de4354b/comments","author":{"login":"cloudhao1999","id":32376445,"node_id":"MDQ6VXNlcjMyMzc2NDQ1","avatar_url":"https://avatars.githubusercontent.com/u/32376445?v=4","gravatar_id":"","url":"https://api.github.com/users/cloudhao1999","html_url":"https://github.com/cloudhao1999","followers_url":"https://api.github.com/users/cloudhao1999/followers","following_url":"https://api.github.com/users/cloudhao1999/following{/other_user}","gists_url":"https://api.github.com/users/cloudhao1999/gists{/gist_id}","starred_url":"https://api.github.com/users/cloudhao1999/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/cloudhao1999/subscriptions","organizations_url":"https://api.github.com/users/cloudhao1999/orgs","repos_url":"https://api.github.com/users/cloudhao1999/repos","events_url":"https://api.github.com/users/cloudhao1999/events{/privacy}","received_events_url":"https://api.github.com/users/cloudhao1999/received_events","type":"User","site_admin":false},"committer":{"login":"cloudhao1999","id":32376445,"node_id":"MDQ6VXNlcjMyMzc2NDQ1","avatar_url":"https://avatars.githubusercontent.com/u/32376445?v=4","gravatar_id":"","url":"https://api.github.com/users/cloudhao1999","html_url":"https://github.com/cloudhao1999","followers_url":"https://api.github.com/users/cloudhao1999/followers","following_url":"https://api.github.com/users/cloudhao1999/following{/other_user}","gists_url":"https://api.github.com/users/cloudhao1999/gists{/gist_id}","starred_url":"https://api.github.com/users/cloudhao1999/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/cloudhao1999/subscriptions","organizations_url":"https://api.github.com/users/cloudhao1999/orgs","repos_url":"https://api.github.com/users/cloudhao1999/repos","events_url":"https://api.github.com/users/cloudhao1999/events{/privacy}","received_events_url":"https://api.github.com/users/cloudhao1999/received_events","type":"User","site_admin":false},"parents":[{"sha":"6ede942ebc6009ac3518ce4a89ec534ae78c0b7b","url":"https://api.github.com/repos/cloudhao1999/cloud-app-admin/commits/6ede942ebc6009ac3518ce4a89ec534ae78c0b7b","html_url":"https://github.com/cloudhao1999/cloud-app-admin/commit/6ede942ebc6009ac3518ce4a89ec534ae78c0b7b"}]}]}');
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *
 * @description 获取仓库commit信息（假数据）
 */
export const fetchMockCommits = () => {
  return new Promise<BasicResult<GithubCommitResultType[]>>(async (resolve, reject) => {
    try {
      const res = await http.get<{}, BasicResult<GithubCommitResultType[]>>("/commits");
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
