import mongoose , {Schema} from 'mongoose';
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
  videFile:{
    type: String, //cloudinary url
    required: true,
  },
  thumbnail:{
    type: String, //cloudinary url
    required: true,
  },
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title:{
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    index: true
  },
  description:{
    type: String,
    required: [true,"You must specify a description"]
  },
  duration:{
    type: Number,
    required: true
  },
  views:{
    type: Number,
    default: 0
  },
  isPublished:{
    type: Boolean,
    default:true
  }
} , {timestamps: true});


videoSchema.plugin(mongooseAggregatePaginate); //this will take the project to an advance level

export const Video = mongoose.model('video', videoSchema);