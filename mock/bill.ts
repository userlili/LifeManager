import { Random } from "mockjs";
import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/bill",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        total: 20,
        data: new Array(10).fill("").map((bill, index) => {
          return {
            id: index + 1,
            type: Random.pick(["history", "literature", "technology"]),
            price: Random.guid(),
            memo: Random.cparagraph()         
          };
        })
      };
    }
  },
  {
    url: "/api/bill/type",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "请示成功",
        status: "success",
        total: 3,
        data: [
          {
            label: "历史",
            value: "history"
          },
          {
            label: "文学",
            value: "literature"
          },
          {
            label: "科技",
            value: "technology"
          }
        ]
      };
    }
  },
  {
    url: "/api/bill/:id",
    method: "delete",
    response: () => {
      return {
        code: 200,
        message: "删除成功",
        status: "success",
        data: {
          count: 1
        }
      };
    }
  },
  {
    url: "/api/bill",
    method: "delete",
    response: () => {
      return {
        code: 200,
        message: "批量删除成功",
        status: "success",
        data: {
          count: 1
        }
      };
    }
  },
  {
    url: "/api/bill",
    method: "put",
    response: () => {
      return {
        code: 200,
        message: "编辑成功",
        status: "success",
        data: {
          count: 1
        }
      };
    }
  },
  {
    url: "/api/bill",
    method: "post",
    response: () => {
      return {
        code: 200,
        message: "添加成功",
        status: "success",
        data: {
          count: 1
        }
      };
    }
  }
] as MockMethod[];
