import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
    @Prop({ required: true })
    name: string;


}

const _ProjectSchema = SchemaFactory.createForClass(Project);
_ProjectSchema.set('toJSON', {
    virtuals: true
});

export const ProjectSchema = _ProjectSchema;