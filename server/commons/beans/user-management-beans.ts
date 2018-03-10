'use strict';

class UserDetails {
    private userName: string;
    private emailId: string;
    private firstName: string;
    private lastName: string;

    constructor($userName: string, $emailId: string, $firstName: string, $lastName: string) {
        this.userName = $userName;
        this.emailId = $emailId;
        this.firstName = $firstName;
        this.lastName = $lastName;
    }

	public get $userName(): string {
		return this.userName;
	}

	public get $emailId(): string {
		return this.emailId;
	}

	public get $firstName(): string {
		return this.firstName;
	}

	public get $lastName(): string {
		return this.lastName;
    }
}

export class UserRequestBean extends UserDetails {
    private password: string;
    private roles: [string];


	public get $password(): string {
		return this.password;
	}

	public get $roles(): [string] {
		return this.roles;
	}
    
}

export class UserResponseBean extends UserDetails {
    
}