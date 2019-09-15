export class UserInfoModel
{
	guid: string;
	id: string;
	
	first_name: string;
	last_name: string;

	email: string;
	zipcode: string;

	password: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}