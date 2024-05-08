import { Schema, model } from "mongoose";
import { Task } from "../../domain/task";

const TaskSchema = new Schema<Task>(
  {
    text: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    // add "createdAt" "updatedAt"
    timestamps: true,
    // Delete "__v" in the document
    versionKey: false,
  }
);

TaskSchema.methods.toJSON = function () {
  const { __v, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
};

export const TaskModel = model("tasks", TaskSchema);
