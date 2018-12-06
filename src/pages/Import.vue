<template>
	<div>
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item active" aria-current="page">{{ $t('message.search') }}</li>
			</ol>
		</nav>

		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="form-group row">
						<label class="col-sm-4 col-form-label">
							ปีการศึกษา
							<span class="text-danger">*</span>
						</label>
						<div class="col-sm-8">
							<select class="form-control">
								<option>2561</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="form-group row">
						<label class="col-sm-3 col-form-label">
							ภาคการศึกษา
							<span class="text-danger">*</span>
						</label>
						<div class="col-sm-5">
							<select class="form-control">
								<option>1</option>
								<option>2</option>
							</select>
						</div>
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col-md-4">
					<div class="form-group row">
						<label class="col-sm-4 col-form-label">สำนักวิชา</label>
						<div class="col-sm-8">
							<select class="form-control">
								<option>1</option>
								<option>2</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="form-group row">
						<label class="col-sm-3 col-form-label">สาขาวิชา</label>
						<div class="col-sm-9">
							<select class="form-control">
								<option>1</option>
								<option>2</option>
							</select>
						</div>
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col-md-4">
					<div class="form-group row">
						<label class="col-sm-4 col-form-label">ชั้นปี</label>
						<div class="col-sm-8">
							<select class="form-control">
								<option>1</option>
								<option>2</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="row">
						<div class="col">
							<div class="form-group row">
								<label class="col-sm-6 col-form-label">รหัสประจำตัว</label>
								<div class="col-sm-6">
									<input type="text" class="form-control">
								</div>
							</div>
						</div>
						<div class="col">
							<div class="form-group row">
								<label class="col-sm-4 col-form-label">
									<i class></i>
								</label>
								<div class="col-sm-8">
									<input type="text" class="form-control">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="w-100"></div>
				<div class="col d-flex justify-content-center">
					<button type="button" class="btn btn-warning">ค้นหา</button>
					<button type="button" class="btn btn-warning">นำเข้าผู้มีสิทธิ์ลงทะเบียนสอบ</button>
					<button type="button" class="btn btn-warning">ยกเลิก</button>
				</div>
			</div>
		</div>

		<nav aria-label="breadcrumb" class="mt-3">
			<ol class="breadcrumb">
				<li class="breadcrumb-item active" aria-current="page">{{ $t('message.import.fee_head') }}</li>
			</ol>
		</nav>
		<div class="row">
			<div class="col-md-9">{{ $t('message.import.fee_desc') }}</div>
			<div class="col-md-1">
				<div class="custom-control custom-radio">
					<input v-model="form.fee" value="normal" type="radio" class="custom-control-input" id="normalFee">
					<label class="custom-control-label" for="normalFee">{{ $t('message.import.normal') }}</label>
				</div>
			</div>
			<div class="col-md-1">
				<div class="custom-control custom-radio">
					<input v-model="form.fee" value="special" type="radio" class="custom-control-input" id="specialFee">
					<label class="custom-control-label" for="specialFee">{{ $t('message.import.special') }}</label>
				</div>
			</div>
			<div class="col-md-1">
        <button type="button" class="btn btn-primary">บันทึก</button>
      </div>
		</div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th class="align-middle text-center">ลำดับ</th>
          <th class="align-middle text-center">รหัสประจำตัว</th>
          <th class="align-middle text-center">ชื่อ-นามสกุล</th>
          <th class="align-middle text-center">สำนักวิชา</th>
          <th class="align-middle text-center">สาขาวิชา</th>
          <th class="align-middle text-center">ชั้นปี</th>
          <th class="align-middle text-center">คะแนนเฉลี่ย</th>
          <th class="align-middle text-center">จํานวนวิชาที่สอบผ่าน/จํานวนครั้งที่สอบ</th>
          <th class="align-middle text-center">สถานะการลงทะเบียน</th>
          <th class="align-middle text-center">ประเภทการคิดค่าธรรมเนียม</th>
          <th class="align-middle text-center">ผลการสอบ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <pre>{{ $data }}</pre>
	</div>
</template>

<script>
export default {
	name: "Import",
	data() {
		return {
			form: {
				year: "",
        semester: "",
        fee: "",
			}
		};
	},
	methods: {}
};
</script>