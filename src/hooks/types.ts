export type ControlCategory = {
    name: string
    description: string
}

export type Area = {
    name: string
    description: string
}

export type Metric = {
    id: string
    name: string
    description: string
}

export type Control = {
    name: string
    description: string
    value: number
    area: Area
    metrics: Metric[]
}

export const controlCategories: ControlCategory[] = [
    {
        name: 'Regulatory',
        description: 'These are rules you have to comply with by law',
    },
    {
        name: 'Risk Mitigation',
        description: 'These are rules you created yourself in order to mitigate your risks',
    },
]

export const areas: Area[] = [
    {
        name: 'CDD',
        description: 'Customer Due Diligence',
    },
    {
        name: 'EDD',
        description: 'Enhanced Due Diligence',
    },
    {
        name: 'KYB',
        description: 'Know Your Business',
    },
    {
        name: 'KYC',
        description: 'Know Your Customer',
    },
    {
        name: 'IDV',
        description: 'Identity Verification',
    },
]

export const metrics: Metric[] = [
    {
        id: 'is_high_risk',
        name: 'Is High Risk',
        description: 'Entity is of high risk',
    },
    {
        id: 'company_many_directors_count',
        name: 'company_many_directors_count',
        description: 'company_many_directors_count',
    },
    {
        id: 'company_max_risk_rating_count',
        name: 'company_max_risk_rating_count',
        description: 'company_max_risk_rating_count',
    },
    {
        id: 'company_no_directors_count',
        name: 'company_no_directors_count',
        description: 'company_no_directors_count',
    },
    {
        id: 'company_prohibited_postcode_count',
        name: 'company_prohibited_postcode_count',
        description: 'company_prohibited_postcode_count',
    },
    {
        id: 'director_prohibited_postcode_count',
        name: 'director_prohibited_postcode_count',
        description: 'director_prohibited_postcode_count',
    },
    {
        id: 'director_sanctioned_country_count',
        name: 'director_sanctioned_country_count',
        description: 'director_sanctioned_country_count',
    },
    {
        id: 'invalid_company_email_count',
        name: 'invalid_company_email_count',
        description: 'invalid_company_email_count',
    },
    {
        id: 'invalid_account_owner_age_count',
        name: 'invalid_account_owner_age_count',
        description: 'invalid_account_owner_age_count',
    },
    {
        id: 'invalid_account_owner_email_count',
        name: 'invalid_account_owner_email_count',
        description: 'invalid_account_owner_email_count',
    },
    {
        id: 'invalid_account_owner_postcode_count',
        name: 'invalid_account_owner_postcode_count',
        description: 'invalid_account_owner_postcode_count',
    },
    {
        id: 'invalid_director_age_count',
        name: 'invalid_director_age_count',
        description: 'invalid_director_age_count',
    },
    {
        id: 'invalid_director_email_count',
        name: 'invalid_director_email_count',
        description: 'invalid_director_email_count',
    },
    {
        id: 'invalid_director_postcode_count',
        name: 'invalid_director_postcode_count',
        description: 'invalid_director_postcode_count',
    },
    {
        id: 'invalid_company_postcode_count',
        name: 'invalid_company_postcode_count',
        description: 'invalid_company_postcode_count',
    },
    {
        id: 'invalid_shareholder_age_count',
        name: 'invalid_shareholder_age_count',
        description: 'invalid_shareholder_age_count',
    },
    {
        id: 'invalid_shareholder_email_count',
        name: 'invalid_shareholder_email_count',
        description: 'invalid_shareholder_email_count',
    },
    {
        id: 'invalid_shareholder_postcode_count',
        name: 'invalid_shareholder_postcode_count',
        description: 'invalid_shareholder_postcode_count',
    },
    {
        id: 'missing_account_owner_address_lines_count',
        name: 'missing_account_owner_address_lines_count',
        description: 'missing_account_owner_address_lines_count',
    },
    {
        id: 'missing_account_owner_dob_count',
        name: 'missing_account_owner_dob_count',
        description: 'missing_account_owner_dob_count',
    },
    {
        id: 'missing_account_owner_first_name_count',
        name: 'missing_account_owner_first_name_count',
        description: 'missing_account_owner_first_name_count',
    },
    {
        id: 'missing_account_owner_last_name_count',
        name: 'missing_account_owner_last_name_count',
        description: 'missing_account_owner_last_name_count',
    },
    {
        id: 'missing_account_owner_name_count',
        name: 'missing_account_owner_name_count',
        description: 'missing_account_owner_name_count',
    },
    {
        id: 'missing_account_owner_email_count',
        name: 'missing_account_owner_email_count',
        description: 'missing_account_owner_email_count',
    },
    {
        id: 'missing_account_owner_postcode_count',
        name: 'missing_account_owner_postcode_count',
        description: 'missing_account_owner_postcode_count',
    },
    {
        id: 'missing_account_owner_ssn_count',
        name: 'missing_account_owner_ssn_count',
        description: 'missing_account_owner_ssn_count',
    },
    {
        id: 'missing_company_email_count',
        name: 'missing_company_email_count',
        description: 'missing_company_email_count',
    },
    {
        id: 'missing_company_name_count',
        name: 'missing_company_name_count',
        description: 'missing_company_name_count',
    },
    {
        id: 'missing_company_incorporation_date_count',
        name: 'missing_company_incorporation_date_count',
        description: 'missing_company_incorporation_date_count',
    },
    {
        id: 'missing_company_industry_type_count',
        name: 'missing_company_industry_type_count',
        description: 'missing_company_industry_type_count',
    },
    {
        id: 'missing_company_postcode_count',
        name: 'missing_company_postcode_count',
        description: 'missing_company_postcode_count',
    },
    {
        id: 'missing_company_phone_number_count',
        name: 'missing_company_phone_number_count',
        description: 'missing_company_phone_number_count',
    },
    {
        id: 'missing_director_postcode_count',
        name: 'missing_director_postcode_count',
        description: 'missing_director_postcode_count',
    },
    {
        id: 'missing_director_first_name_count',
        name: 'missing_director_first_name_count',
        description: 'missing_director_first_name_count',
    },
    {
        id: 'missing_director_last_name_count',
        name: 'missing_director_last_name_count',
        description: 'missing_director_last_name_count',
    },
    {
        id: 'missing_director_name_count',
        name: 'missing_director_name_count',
        description: 'missing_director_name_count',
    },
    {
        id: 'missing_director_country_count',
        name: 'missing_director_country_count',
        description: 'missing_director_country_count',
    },
    {
        id: 'missing_director_dob_count',
        name: 'missing_director_dob_count',
        description: 'missing_director_dob_count',
    },
    {
        id: 'missing_shareholder_address_lines_count',
        name: 'missing_shareholder_address_lines_count',
        description: 'missing_shareholder_address_lines_count',
    },
    {
        id: 'missing_shareholder_dob_count',
        name: 'missing_shareholder_dob_count',
        description: 'missing_shareholder_dob_count',
    },
    {
        id: 'missing_shareholder_first_name_count',
        name: 'missing_shareholder_first_name_count',
        description: 'missing_shareholder_first_name_count',
    },
    {
        id: 'missing_shareholder_last_name_count',
        name: 'missing_shareholder_last_name_count',
        description: 'missing_shareholder_last_name_count',
    },
    {
        id: 'missing_shareholder_name_count',
        name: 'missing_shareholder_name_count',
        description: 'missing_shareholder_name_count',
    },
    {
        id: 'missing_shareholder_email_count',
        name: 'missing_shareholder_email_count',
        description: 'missing_shareholder_email_count',
    },
    {
        id: 'missing_shareholder_postcode_count',
        name: 'missing_shareholder_postcode_count',
        description: 'missing_shareholder_postcode_count',
    },
    {
        id: 'missing_shareholder_ssn_count',
        name: 'missing_shareholder_ssn_count',
        description: 'missing_shareholder_ssn_count',
    },
    {
        id: 'non_geo_director_postcode_count',
        name: 'non_geo_director_postcode_count',
        description: 'non_geo_director_postcode_count',
    },
    {
        id: 'non_geo_company_postcode_count',
        name: 'non_geo_company_postcode_count',
        description: 'non_geo_company_postcode_count',
    },
    {
        id: 'old_company_count',
        name: 'old_company_count',
        description: 'old_company_count',
    },
    {
        id: 'shared_custom_company_email_domain_count',
        name: 'shared_custom_company_email_domain_count',
        description: 'shared_custom_company_email_domain_count',
    },
    {
        id: 'shared_company_email_count',
        name: 'shared_company_email_count',
        description: 'shared_company_email_count',
    },
    {
        id: 'shared_user_email_count',
        name: 'shared_user_email_count',
        description: 'shared_user_email_count',
    },
    {
        id: 'shared_user_phone_number_within_week_count',
        name: 'shared_user_phone_number_within_week_count',
        description: 'shared_user_phone_number_within_week_count',
    },
    {
        id: 'shareholder_high_risk_country_count',
        name: 'shareholder_high_risk_country_count',
        description: 'shareholder_high_risk_country_count',
    },
    {
        id: 'shareholder_sanctioned_country_count',
        name: 'shareholder_sanctioned_country_count',
        description: 'shareholder_sanctioned_country_count',
    },
    {
        id: 'temporary_account_owner_email_count',
        name: 'temporary_account_owner_email_count',
        description: 'temporary_account_owner_email_count',
    },
    {
        id: 'temporary_company_email_count',
        name: 'temporary_company_email_count',
        description: 'temporary_company_email_count',
    },
    {
        id: 'temporary_shareholder_email_count',
        name: 'temporary_shareholder_email_count',
        description: 'temporary_shareholder_email_count',
    },
    {
        id: 'underage_account_owner_count',
        name: 'underage_account_owner_count',
        description: 'underage_account_owner_count',
    },
    {
        id: 'underage_director_count',
        name: 'underage_director_count',
        description: 'underage_director_count',
    },
    {
        id: 'underage_shareholder_count',
        name: 'underage_shareholder_count',
        description: 'underage_shareholder_count',
    },
    {
        id: 'single_letter_user_last_name_count',
        name: 'single_letter_user_last_name_count',
        description: 'single_letter_user_last_name_count',
    },
    {
        id: 'company_low_risk_band_high_risk_rating_count',
        name: 'company_low_risk_band_high_risk_rating_count',
        description: 'company_low_risk_band_high_risk_rating_count',
    },
    {
        id: 'active_customer_true_positive_sanctions_count',
        name: 'active_customer_true_positive_sanctions_count',
        description: 'active_customer_true_positive_sanctions_count',
    },
    {
        id: 'missing_customer_onboarding_risk_perc',
        name: 'missing_customer_onboarding_risk_perc',
        description: 'missing_customer_onboarding_risk_perc',
    },
    {
        id: 'underage_customer_count',
        name: 'underage_customer_count',
        description: 'underage_customer_count',
    },
    {
        id: 'invalid_customer_age_count',
        name: 'invalid_customer_age_count',
        description: 'invalid_customer_age_count',
    },
    {
        id: 'customer_peps_high_risk_perc',
        name: 'customer_peps_high_risk_perc',
        description: 'customer_peps_high_risk_perc',
    },
    {
        id: 'missing_customer_pre_idv_risk_rating_count',
        name: 'missing_customer_pre_idv_risk_rating_count',
        description: 'missing_customer_pre_idv_risk_rating_count',
    },
    {
        id: 'non_alphabetical_customer_city_count',
        name: 'non_alphabetical_customer_city_count',
        description: 'non_alphabetical_customer_city_count',
    },
    {
        id: 'customer_released_manually_rejected_idv_count',
        name: 'customer_released_manually_rejected_idv_count',
        description: 'customer_released_manually_rejected_idv_count',
    },
    {
        id: 'customer_true_positive_sanctions_signup_within_2d_count',
        name: 'customer_true_positive_sanctions_signup_within_2d_count',
        description: 'customer_true_positive_sanctions_signup_within_2d_count',
    },
    {
        id: 'customer_missing_cra_low_risk_rating_perc',
        name: 'customer_missing_cra_low_risk_rating_perc',
        description: 'customer_missing_cra_low_risk_rating_perc',
    },
    {
        id: 'active_director_true_positive_sanctions_count',
        name: 'active_director_true_positive_sanctions_count',
        description: 'active_director_true_positive_sanctions_count',
    },
    {
        id: 'account_owner_sanctioned_country_count',
        name: 'account_owner_sanctioned_country_count',
        description: 'account_owner_sanctioned_country_count',
    },
    {
        id: 'missing_beneficial_owner_initial_sanctions_count',
        name: 'missing_beneficial_owner_initial_sanctions_count',
        description: 'missing_beneficial_owner_initial_sanctions_count',
    },
    {
        id: 'missing_beneficial_owner_ongoing_sanctions_count',
        name: 'missing_beneficial_owner_ongoing_sanctions_count',
        description: 'missing_beneficial_owner_ongoing_sanctions_count',
    },
    {
        id: 'active_beneficial_owner_true_positive_sanctions_count',
        name: 'active_beneficial_owner_true_positive_sanctions_count',
        description: 'active_beneficial_owner_true_positive_sanctions_count',
    },
    {
        id: 'missing_company_initial_sanctions_count',
        name: 'missing_company_initial_sanctions_count',
        description: 'missing_company_initial_sanctions_count',
    },
    {
        id: 'missing_company_ongoing_sanctions_count',
        name: 'missing_company_ongoing_sanctions_count',
        description: 'missing_company_ongoing_sanctions_count',
    },
    {
        id: 'active_company_true_positive_sanctions_count',
        name: 'active_company_true_positive_sanctions_count',
        description: 'active_company_true_positive_sanctions_count',
    },
    {
        id: 'missing_company_onboarding_cra_count',
        name: 'missing_company_onboarding_cra_count',
        description: 'missing_company_onboarding_cra_count',
    },
    {
        id: 'missing_company_risk_rating_count',
        name: 'missing_company_risk_rating_count',
        description: 'missing_company_risk_rating_count',
    },
    {
        id: 'missing_high_risk_customer_edd_count',
        name: 'missing_high_risk_customer_edd_count',
        description: 'missing_high_risk_customer_edd_count',
    },
    {
        id: 'missing_director_address_lines_count',
        name: 'missing_director_address_lines_count',
        description: 'missing_director_address_lines_count',
    },
    {
        id: 'missing_director_ssn_count',
        name: 'missing_director_ssn_count',
        description: 'missing_director_ssn_count',
    },
    {
        id: 'missing_director_email_count',
        name: 'missing_director_email_count',
        description: 'missing_director_email_count',
    },
    {
        id: 'missing_account_owner_phone_number_count',
        name: 'missing_account_owner_phone_number_count',
        description: 'missing_account_owner_phone_number_count',
    },
    {
        id: 'missing_director_phone_number_count',
        name: 'missing_director_phone_number_count',
        description: 'missing_director_phone_number_count',
    },
    {
        id: 'missing_account_owner_document_count',
        name: 'missing_account_owner_document_count',
        description: 'missing_account_owner_document_count',
    },
    {
        id: 'missing_director_document_count',
        name: 'missing_director_document_count',
        description: 'missing_director_document_count',
    },
    {
        id: 'missing_account_owner_verified_name_count',
        name: 'missing_account_owner_verified_name_count',
        description: 'missing_account_owner_verified_name_count',
    },
    {
        id: 'missing_director_verified_name_count',
        name: 'missing_director_verified_name_count',
        description: 'missing_director_verified_name_count',
    },
    {
        id: 'missing_account_owner_verified_dob_or_address_count',
        name: 'missing_account_owner_verified_dob_or_address_count',
        description: 'missing_account_owner_verified_dob_or_address_count',
    },
    {
        id: 'missing_director_verified_dob_or_address_count',
        name: 'missing_director_verified_dob_or_address_count',
        description: 'missing_director_verified_dob_or_address_count',
    },
    {
        id: 'missing_account_owner_initial_pep_count',
        name: 'missing_account_owner_initial_pep_count',
        description: 'missing_account_owner_initial_pep_count',
    },
    {
        id: 'missing_director_initial_pep_count',
        name: 'missing_director_initial_pep_count',
        description: 'missing_director_initial_pep_count',
    },
    {
        id: 'missing_account_owner_ongoing_pep_count',
        name: 'missing_account_owner_ongoing_pep_count',
        description: 'missing_account_owner_ongoing_pep_count',
    },
    {
        id: 'missing_director_ongoing_pep_count',
        name: 'missing_director_ongoing_pep_count',
        description: 'missing_director_ongoing_pep_count',
    },
    {
        id: 'missing_beneficial_owner_initial_pep_count',
        name: 'missing_beneficial_owner_initial_pep_count',
        description: 'missing_beneficial_owner_initial_pep_count',
    },
    {
        id: 'missing_beneficial_owner_ongoing_pep_count',
        name: 'missing_beneficial_owner_ongoing_pep_count',
        description: 'missing_beneficial_owner_ongoing_pep_count',
    },
    {
        id: 'missing_account_owner_initial_sanctions_count',
        name: 'missing_account_owner_initial_sanctions_count',
        description: 'missing_account_owner_initial_sanctions_count',
    },
    {
        id: 'missing_director_initial_sanctions_count',
        name: 'missing_director_initial_sanctions_count',
        description: 'missing_director_initial_sanctions_count',
    },
    {
        id: 'missing_account_owner_ongoing_sanctions_count',
        name: 'missing_account_owner_ongoing_sanctions_count',
        description: 'missing_account_owner_ongoing_sanctions_count',
    },
    {
        id: 'missing_director_ongoing_sanctions_count',
        name: 'missing_director_ongoing_sanctions_count',
        description: 'missing_director_ongoing_sanctions_count',
    },
    {
        id: 'active_account_owner_true_positive_sanctions_count',
        name: 'active_account_owner_true_positive_sanctions_count',
        description: 'active_account_owner_true_positive_sanctions_count',
    },
    {
        id: 'missing_non_sole_prop_company_number_count',
        name: 'missing_non_sole_prop_company_number_count',
        description: 'missing_non_sole_prop_company_number_count',
    },
    {
        id: 'missing_non_sole_prop_company_address_lines_count',
        name: 'missing_non_sole_prop_company_address_lines_count',
        description: 'missing_non_sole_prop_company_address_lines_count',
    },
    {
        id: 'non_sole_prop_company_no_beneficial_owner_count',
        name: 'non_sole_prop_company_no_beneficial_owner_count',
        description: 'non_sole_prop_company_no_beneficial_owner_count',
    },
    {
        id: 'missing_non_sole_prop_company_legal_name_count',
        name: 'missing_non_sole_prop_company_legal_name_count',
        description: 'missing_non_sole_prop_company_legal_name_count',
    },
    {
        id: 'missing_sole_prop_company_legal_name_count',
        name: 'missing_sole_prop_company_legal_name_count',
        description: 'missing_sole_prop_company_legal_name_count',
    },
    {
        id: 'missing_sole_prop_tin_count',
        name: 'missing_sole_prop_tin_count',
        description: 'missing_sole_prop_tin_count',
    },
    {
        id: 'non_sole_prop_company_no_beneficial_owner_count',
        name: 'non_sole_prop_company_no_beneficial_owner_count',
        description: 'non_sole_prop_company_no_beneficial_owner_count',
    },
    {
        id: 'non_sole_prop_company_no_directors_count',
        name: 'non_sole_prop_company_no_directors_count',
        description: 'non_sole_prop_company_no_directors_count',
    },
    {
        id: 'missing_retail_customer_name_count',
        name: 'missing_retail_customer_name_count',
        description: 'missing_retail_customer_name_count',
    },
    {
        id: 'incomplete_retail_customer_name_count',
        name: 'incomplete_retail_customer_name_count',
        description: 'incomplete_retail_customer_name_count',
    },
    {
        id: 'missing_retail_customer_dob_count',
        name: 'missing_retail_customer_dob_count',
        description: 'missing_retail_customer_dob_count',
    },
    {
        id: 'invalid_retail_customer_age_count',
        name: 'invalid_retail_customer_age_count',
        description: 'invalid_retail_customer_age_count',
    },
    {
        id: 'incomplete_retail_customer_dob_count',
        name: 'incomplete_retail_customer_dob_count',
        description: 'incomplete_retail_customer_dob_count',
    },
    {
        id: 'missing_retail_customer_city_count',
        name: 'missing_retail_customer_city_count',
        description: 'missing_retail_customer_city_count',
    },
    {
        id: 'missing_retail_customer_postcode_count',
        name: 'missing_retail_customer_postcode_count',
        description: 'missing_retail_customer_postcode_count',
    },
    {
        id: 'invalid_retail_customer_postcode_count',
        name: 'invalid_retail_customer_postcode_count',
        description: 'invalid_retail_customer_postcode_count',
    },
    {
        id: 'missing_retail_customer_address_lines_count',
        name: 'missing_retail_customer_address_lines_count',
        description: 'missing_retail_customer_address_lines_count',
    },
    {
        id: 'missing_retail_customer_verified_name_count',
        name: 'missing_retail_customer_verified_name_count',
        description: 'missing_retail_customer_verified_name_count',
    },
    {
        id: 'missing_retail_customer_verified_dob_or_address_count',
        name: 'missing_retail_customer_verified_dob_or_address_count',
        description: 'missing_retail_customer_verified_dob_or_address_count',
    },
    {
        id: 'missing_retail_customer_initial_pep_count',
        name: 'missing_retail_customer_initial_pep_count',
        description: 'missing_retail_customer_initial_pep_count',
    },
    {
        id: 'missing_retail_customer_ongoing_pep_count',
        name: 'missing_retail_customer_ongoing_pep_count',
        description: 'missing_retail_customer_ongoing_pep_count',
    },
    {
        id: 'missing_retail_customer_initial_sanctions_count',
        name: 'missing_retail_customer_initial_sanctions_count',
        description: 'missing_retail_customer_initial_sanctions_count',
    },
    {
        id: 'missing_retail_customer_ongoing_sanctions_count',
        name: 'missing_retail_customer_ongoing_sanctions_count',
        description: 'missing_retail_customer_ongoing_sanctions_count',
    },
    {
        id: 'active_retail_customer_true_positive_sanctions_count',
        name: 'active_retail_customer_true_positive_sanctions_count',
        description: 'active_retail_customer_true_positive_sanctions_count',
    },
    {
        id: 'retail_customer_sanctioned_country_count',
        name: 'retail_customer_sanctioned_country_count',
        description: 'retail_customer_sanctioned_country_count',
    },
    {
        id: 'missing_retail_customer_onboarding_cra_count',
        name: 'missing_retail_customer_onboarding_cra_count',
        description: 'missing_retail_customer_onboarding_cra_count',
    },
    {
        id: 'missing_high_risk_retail_customer_edd_count',
        name: 'missing_high_risk_retail_customer_edd_count',
        description: 'missing_high_risk_retail_customer_edd_count',
    },
]

export const controls: Control[] = [
    {
        name: 'missing_account_owner_name_check',
        description: 'All account owners have provided names',
        value: 100,
        area: {
            name: 'CDD',
            description: 'Customer Due Diligence',
        },
        metrics: [
            {
                id: 'missing_account_owner_name_count',
                name: 'missing_account_owner_name_count',
                description: 'missing_account_owner_name_count',
            },
        ],
    },
    {
        name: 'missing_account_owner_postcode_check',
        description: 'All account owners have provided postcodes',
        value: 100,
        area: {
            name: 'CDD',
            description: 'Customer Due Diligence',
        },
        metrics: [
            {
                id: 'missing_account_owner_postcode_count',
                name: 'missing_account_owner_postcode_count',
                description: 'missing_account_owner_postcode_count',
            },
        ],
    },
    {
        name: 'missing_manager_owner_document_check',
        description: 'All account owners have provided government-issued documents',
        value: 100,
        area: {
            name: 'IDV',
            description: 'Identity Verification',
        },
        metrics: [
            {
                id: 'missing_account_owner_document_count',
                name: 'missing_account_owner_document_count',
                description: 'missing_account_owner_document_count',
            },
            {
                id: 'missing_director_document_count',
                name: 'missing_director_document_count',
                description: 'missing_director_document_count',
            },
        ],
    },
]
