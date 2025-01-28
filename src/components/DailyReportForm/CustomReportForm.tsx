import { useForm } from 'react-hook-form';
import useSubmitSalesReport from '../../hooks/useSubmitSalesReport';
import './CustomReportForm.scss';

interface IFormDataSalesReport {
  first_name: string;
  last_name: string;
  appointments_set: number;
  inspections_attended: number;
  time_studied_today: string;
  attended_company: number;
  completed_company: number;
  closed_company: number;
  attended_self_gen: number;
  completed_self_gen: number;
  closed_self_gen: number;
}

const CustomReportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormDataSalesReport>();

  const { submit, loading, success } = useSubmitSalesReport();

  const onSubmit = async (data: IFormDataSalesReport) => {
    const response = await submit(data);
    if (response.data.succeeded || response.data.succeded) {
      reset();
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="daily-progress-form">
        <div className="bg-body-tertiary rounded-3 p-3 mb-4">
          <h5>Personal Details</h5>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label">First name *</label>
              <input
                className="form-control"
                {...register('first_name', { required: 'This field is required' })}
              />
              {errors.first_name && <p className="text-danger">{errors.first_name.message}</p>}
            </div>
            <div className="col-6">
              <label className="form-label">Last name *</label>
              <input
                className="form-control"
                {...register('last_name', { required: 'This field is required' })}
              />
              {errors.last_name && <p className="text-danger">{errors.last_name.message}</p>}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label">Appointments set *</label>
              <input
                type="number"
                className="form-control"
                {...register('appointments_set', { required: 'This field is required' })}
              />
              {errors.appointments_set && (
                <p className="text-danger">{errors.appointments_set.message}</p>
              )}
            </div>
            <div className="col-6">
              <label className="form-label">Inspections attended *</label>
              <input
                type="number"
                className="form-control"
                {...register('inspections_attended', { required: 'This field is required' })}
              />
              {errors.inspections_attended && (
                <p className="text-danger">{errors.inspections_attended.message}</p>
              )}
            </div>
          </div>

          <div className="">
            <label className="form-label">Time studied today *</label>
            <input
              type="text"
              className="form-control"
              {...register('time_studied_today', { required: 'This field is required' })}
            />
            {errors.time_studied_today && (
              <p className="text-danger">{errors.time_studied_today.message}</p>
            )}
          </div>
        </div>

        <div className="bg-body-tertiary rounded-3 p-3 mb-4">
          <h5>Inspections</h5>
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Attended (company) *</label>
              <input
                type="number"
                className="form-control"
                {...register('attended_company', { required: 'This field is required' })}
              />
              {errors.attended_company && (
                <p className="text-danger">{errors.attended_company.message}</p>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Completed (company) *</label>
              <input
                type="number"
                className="form-control"
                {...register('completed_company', { required: 'This field is required' })}
              />
              {errors.completed_company && (
                <p className="text-danger">{errors.completed_company.message}</p>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Closed (company) *</label>
              <input
                type="number"
                className="form-control"
                {...register('closed_company', { required: 'This field is required' })}
              />
              {errors.closed_company && (
                <p className="text-danger">{errors.closed_company.message}</p>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label className="form-label">Attended (self-gen) *</label>
              <input
                type="number"
                className="form-control"
                {...register('attended_self_gen', { required: 'This field is required' })}
              />
              {errors.attended_self_gen && (
                <p className="text-danger">{errors.attended_self_gen.message}</p>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Completed (self-gen) *</label>
              <input
                type="number"
                className="form-control"
                {...register('completed_self_gen', { required: 'This field is required' })}
              />
              {errors.completed_self_gen && (
                <p className="text-danger">{errors.completed_self_gen.message}</p>
              )}
            </div>
            <div className="col-md-4">
              <label className="form-label">Closed (self-gen) *</label>
              <input
                type="number"
                className="form-control"
                {...register('closed_self_gen', { required: 'This field is required' })}
              />
              {errors.closed_self_gen && (
                <p className="text-danger">{errors.closed_self_gen.message}</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-dark btn-lg btn-rounded-border align-self-center"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {success && (
          <p className="text-success text-center mt-3 fw-bold">
            Great job! Your form has been submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default CustomReportForm;
