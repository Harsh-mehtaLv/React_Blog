const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID), // BUG FIXED _APPWRITE_ WAS MISSING FROM "VITE_APPWRITE_PROJECT_ID"
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID), // BUG FIXED _APPWRITE_ WAS MISSING FROM "VITE_APPWRITE_DATABASE_ID"
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID), // BUG FIXED _APPWRITE_ WAS MISSING FROM "VITE_APPWRITE_COLLECTION_ID"
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID), // BUG FIXED _APPWRITE_ WAS MISSING FROM "VITE_APPWRITE_BUCKET_ID"
    // Ab yaha pe .env vali sati values variable me daal ke string me kr do
} // ab iski sari env vali values string me convert ho gai hai 

export default conf 



// const conf = {
//     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//     appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//     appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//     appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//     appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
// }

// export default conf