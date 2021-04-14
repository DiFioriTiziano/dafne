import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dafne-vv-create',
  template: `

    <div class="col-sm">
      <div class="card card-accent-info">
        <div class="card-header">
          Elenco Verbali
        </div>
        <div class="card-body">
        <form action="" method="post" class="form-horizontal">

            <div class="form-group row">
              <label class="col-sm-5 col-form-label" for="input-normal">Normal Input</label>
              <div class="col-sm-6">
                <input type="text" id="input-normal" name="input-normal" class="form-control" placeholder="Normal">
              </div>
            </div>

          </form>


          <table class="table table-sm">
            <thead>
              <tr>
                <th>Username</th>
                <th>Date registered</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Carwyn Fachtna</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <span class="badge badge-success">Active</span>
                </td>
              </tr>
              <tr>
                <td>Nehemiah Tatius</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <span class="badge badge-danger">Banned</span>
                </td>
              </tr>
              <tr>
                <td>Ebbe Gemariah</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <span class="badge badge-secondary">Inactive</span>
                </td>
              </tr>
              <tr>
                <td>Eustorgios Amulius</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <span class="badge badge-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Leopold Gáspár</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <span class="badge badge-success">Active</span>
                </td>
              </tr>
            </tbody>
          </table>



        </div>
      </div>
    </div>
  `,
  styleUrls: ['./vv-create.component.css']
})
export class VvCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
