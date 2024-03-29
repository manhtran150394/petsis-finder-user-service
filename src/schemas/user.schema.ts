import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { EStatuz, EUserType } from 'src/shared/constants';
import { IAddress } from 'src/shared/types/address.interface';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, require: true })
  userType: EUserType;

  @Prop({ type: String })
  userId: string;

  @Prop({ type: String, select: false })
  password: string;

  @Prop({ type: String })
  status: EStatuz;

  @Prop({ type: String })
  avatar: string;

  @Prop({ type: Number })
  id: number;

  @Prop({ type: String })
  dob: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: Object })
  address: IAddress;

  @Prop({ type: Number })
  phone: number;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  social: string;

  @Prop({ type: String })
  startDate: string;

  @Prop({ type: String })
  howToReachToPetsisFinder: string;

  @Prop({ type: String })
  closedDate: string;

  @Prop({ type: String })
  reasonOfClosing: string;

  @Prop({ type: Boolean })
  requestUpdateDocuments: boolean;

  @Prop({ type: String })
  requestUpdateDocumentsMessage: string;

  @Prop({ type: String })
  terminatedDate: string;

  @Prop({ type: String })
  reasonOfTermination: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
