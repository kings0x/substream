import {prisma} from "./models";
import { Profile } from "passport";


export async function findOrCreateUser(profile :Profile, accessToken:string, refreshtoken:string){
    const firstName = profile.name?.givenName ?? "";
    const lastName = profile.name?.familyName ?? "";
    const googleId = profile.id;
    const email = profile.emails?.[0]?.value ?? "";
    const avatar = profile.photos?.[0]?.value ?? "";;
        
    const user = await prisma.users.upsert({
        where:{google_id : googleId},

        update:{
            first_name : firstName,
            last_name : lastName,
            email : email,
            avatar: avatar,
            is_verified: true,
            google_refresh_token : refreshtoken
                
        },

        create:{
            google_id : googleId,
            first_name : firstName,
            last_name : lastName,
            email : email,
            avatar: avatar,
            is_verified: true,
            google_refresh_token : refreshtoken
                
        }

    })

    return user;
}

export async function findByGoogleId(googleId : string) {
  return prisma.users.findUnique({ where: { google_id: googleId } });
}

export async function findById(id : string) {
  return prisma.users.findUnique({ where: { id } });
}
        