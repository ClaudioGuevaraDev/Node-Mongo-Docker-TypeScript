import { getModelForClass, prop } from "@typegoose/typegoose";

class Task {
  @prop({
    required: true,
    type: String,
  })
  public title: string;

  @prop({
    required: true,
    type: String,
  })
  public description: string;
}

export default getModelForClass(Task, {
  schemaOptions: { timestamps: true, versionKey: false },
});
