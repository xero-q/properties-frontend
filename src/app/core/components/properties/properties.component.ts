import { Component, inject } from '@angular/core';
import {  MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PropertiesService } from '../../services/properties.service';
import { Pagination, Property } from '../../../shared/interfaces/property.interface';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-properties',
  imports: [ MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class Properties {
  private readonly propertiesService = inject(PropertiesService);
  displayedColumns = ['id','host','name','location','status','createdAt','actions'];
  dataSource = new MatTableDataSource<Property>([]);

  totalItems = 0;
  pageSize = 10;
  pageNumber = 1;

  hostFilter = '';
  nameFilter = '';
  locationFilter = '';
  statusFilter = '';

  ngOnInit(){
   this.loadData();
  }

  loadData(){
      this.propertiesService.getPaginated(this.pageSize,this.pageNumber, this.nameFilter,this.locationFilter, this.statusFilter ? Number(this.statusFilter):undefined).subscribe((data:Pagination<Property>)=>{
        this.totalItems = data.totalItems; 
        this.dataSource.data = data.result;
    })
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.pageIndex + 1; 
    this.loadData();
  }

  applyFilters(){
      this.loadData();
  }

  resetFilters(){
    this.nameFilter = '';
    this.locationFilter = '';
    this.statusFilter = '';
    this.loadData();
  }
 
}
