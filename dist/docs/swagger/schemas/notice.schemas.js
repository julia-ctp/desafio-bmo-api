const noticeEnumSchema = {
    NoticeType: {
        type: "string",
        enum: ["importante", "informativo", "nenhum"],
    },
};
const noticeMainSchemas = {
    Notice: {
        type: "object",
        properties: {
            id: { type: "string" },
            employeeId: { type: "string" },
            type: {
                $ref: "#/components/schemas/NoticeType",
            },
            content: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
        },
    },
    CreateNoticeInput: {
        type: "object",
        required: ["type", "content"],
        properties: {
            type: {
                $ref: "#/components/schemas/NoticeType",
            },
            content: { type: "string" },
        },
    },
    UpdateNoticeInput: {
        type: "object",
        properties: {
            type: {
                $ref: "#/components/schemas/NoticeType",
            },
            content: { type: "string" },
        },
    },
};
export default {
    ...noticeEnumSchema,
    ...noticeMainSchemas,
};
