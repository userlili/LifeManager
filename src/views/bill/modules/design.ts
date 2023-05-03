import { CTableColumn } from "#/table";
import { BillModel } from "@/model/bill";
import { UrlListType } from "@/utils/list/listFactory";
import { useI18n } from "vue-i18n";

export const articleUrl: Partial<UrlListType> = {
  list: "/bill",
  delete: "/bill",
  batchDelete: "/bill",
  edit: "/bill",
  add: "/bill"
};

export const setupArticleAttributes = () => {
  const { t } = useI18n();

  const articleFilterOptions = computed(() => {
    return [
      {
        label: t("page.common.type"),
        name: "type",
        tagName: "async-select",
        props: {
          placeholder: t("page.common.type_placeholder"),
          url: "/bill/type",
          size: "default",
          style: {
            width: "100%"
          }
        }
      },
      {
        label: t("page.common.memo"),
        name: "memo",
        tagName: "el-input",
        props: {
          placeholder: t("page.common.memo_placeholder"),
          maxLength: "24"
        }
      },
      
    ];
  });

  const articleColumns = computed<CTableColumn<BillModel>[]>(() => {
    return [
      {
        type: "selection",
        show: true,
        width: "55"
      },
      {
        prop: "uid",
        show: true,
        label: t("page.common.design.article.column.id"),
        width: "80"
      },
      {
        prop: "type",
        show: true,
        label: t("page.common.type"),
        width: "180"
      },
      {
        prop: "price",
        show: true,
        label: t("page.common.price"),
        showOverflowTooltip: true
      },
      {
        prop: "action",
        show: true,
        label: t("page.common.action"),
        // fixed: "right",
        scoped: "actions",
        width: "150"
      }
    ];
  });

  return {
    articleFilterOptions,
    articleColumns
  };
};
