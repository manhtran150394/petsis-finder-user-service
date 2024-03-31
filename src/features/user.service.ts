import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { EStatuz, EUserType } from 'src/shared/constants';
import { DefinedDateFunction } from 'src/shared/custom-function';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(_userType: string) {
    const newUser = new this.userModel({
      userType:
        _userType === EUserType.ADMIN
          ? EUserType.ADMIN
          : _userType === EUserType.PET_OWNER
            ? EUserType.PET_OWNER
            : EUserType.PET_SISTER,
      status: EStatuz.NOT_VERIFIED,
      startDate: DefinedDateFunction.convertDateToJPFormat(Date.now()),
    });
    const createdUser = await newUser.save();
    return createdUser;
  }
}
