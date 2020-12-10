import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
	selector: 'app-file-browser',
	templateUrl: './file-browser.component.html',
	styleUrls: ['./file-browser.component.sass']
})
export class FileBrowserComponent implements OnInit {

	jsonFilePath : string = '../../assets/result.json';
	private jsonFileData : any = [];
	childTreeData: Array<any> = [];
	navBarData: Array<any> = [];

	constructor(private httpClient: HttpClient) { }

	ngOnInit(): void {
		this.readJSONfile();
		// console.log("jsonFileData", this.jsonFileData)
	}

	// reads entire directory tree data from json file, get root data
	// TO DO - 1. Add error handling here; 2. Can be moved to service; 3. Should only read json data - initialisation from root folder should be at other place
	readJSONfile(){
		this.httpClient.get(this.jsonFilePath).subscribe(data =>{
			console.log("data", data);
			this.jsonFileData = data;
			// Get data for the root folder
			let rootFolder = this.jsonFileData.filter((data:any)=>data.type === "ROOT")[0];
			if (rootFolder)
				this.getCurrentDirectoryChilds(rootFolder);
			else
				alert("Root folder not found in the json file. Please use JSON file with ROOT folder")
		})
	}

	// takes input as directory and returns all child directories and file details as an array
	// TO DO - 1. Add error handling here 2.  
	getCurrentDirectoryChilds(parentDirectory: any){
		console.log("parentDirectory", parentDirectory)
		this.navBarData.push(parentDirectory)
		if (this.jsonFileData){
			this.childTreeData = this.jsonFileData.filter((data:any)=>data.parent_id === parentDirectory["id"]);
			console.log("this.childTreeData", this.childTreeData)
		}
	}

	navBarClick(clickedElement: any, index: number){
		console.log("clickedElement", clickedElement, "index", index)
		this.navBarData = this.navBarData.slice(0, index)
		this.getCurrentDirectoryChilds(clickedElement)
	}


}
